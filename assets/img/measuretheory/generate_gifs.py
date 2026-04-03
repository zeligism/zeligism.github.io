
from pathlib import Path
import math
import shutil
import zipfile

import numpy as np
import matplotlib.pyplot as plt
from PIL import Image

BASE = Path("/mnt/data/measure_escape_assets_latex")
BASE.mkdir(parents=True, exist_ok=True)

def make_gif_from_frames(frame_paths, gif_path, duration_ms=350):
    images = [Image.open(p).convert("P", palette=Image.ADAPTIVE) for p in frame_paths]
    images[0].save(
        gif_path,
        save_all=True,
        append_images=images[1:],
        duration=duration_ms,
        loop=0,
        disposal=2,
    )

def save_indicator_plot(x, y, title, subtitle, outpath, xlim, ylim):
    fig, ax = plt.subplots(figsize=(7.2, 4.1))
    ax.fill_between(x, 0, y, step="post", alpha=0.75)
    ax.plot(x, y, drawstyle="steps-post", linewidth=2)
    ax.set_xlim(*xlim)
    ax.set_ylim(*ylim)
    ax.set_xlabel(r"$x$")
    ax.set_ylabel(r"$f_n(x)$")
    ax.set_title(title, pad=10)
    ax.text(
        0.98, 0.96, subtitle,
        transform=ax.transAxes,
        ha="right", va="top",
        fontsize=11,
        bbox=dict(boxstyle="round,pad=0.3", alpha=0.15)
    )
    ax.grid(True, alpha=0.25)
    fig.tight_layout()
    fig.savefig(outpath, dpi=140, bbox_inches="tight")
    plt.close(fig)

# 1) Horizontal infinity
tmp1 = BASE / "_frames_horizontal"
tmp1.mkdir(exist_ok=True)
frames = []
for n in range(1, 11):
    x = np.linspace(0, 12, 2401)
    y = ((x >= n) & (x <= n + 1)).astype(float)
    frame = tmp1 / f"frame_{n:02d}.png"
    save_indicator_plot(
        x=x,
        y=y,
        title=r"Escaping into horizontal infinity: $f_n(x)=\mathbf{1}_{[n,n+1]}(x)$",
        subtitle=rf"$n={n}$",
        outpath=frame,
        xlim=(0, 12),
        ylim=(0, 1.15),
    )
    frames.append(frame)
make_gif_from_frames(frames, BASE / "horizontal_infinity_latex.gif", duration_ms=420)
shutil.rmtree(tmp1)

# 2) Width infinity
tmp2 = BASE / "_frames_width"
tmp2.mkdir(exist_ok=True)
frames = []
n_values_2 = [1, 2, 3, 4, 5, 6, 8, 10, 12, 15, 20]
for i, n in enumerate(n_values_2, start=1):
    x = np.linspace(0, 21, 3001)
    y = (((x >= 0) & (x <= n)).astype(float)) / n
    frame = tmp2 / f"frame_{i:02d}.png"
    save_indicator_plot(
        x=x,
        y=y,
        title=r"Escaping into width infinity: $f_n(x)=\frac{1}{n}\mathbf{1}_{[0,n]}(x)$",
        subtitle=rf"$n={n}$",
        outpath=frame,
        xlim=(0, 21),
        ylim=(0, 1.08),
    )
    frames.append(frame)
make_gif_from_frames(frames, BASE / "width_infinity_latex.gif", duration_ms=450)
shutil.rmtree(tmp2)

# 3) Height infinity
tmp3 = BASE / "_frames_height"
tmp3.mkdir(exist_ok=True)
frames = []
n_values_3 = [1, 2, 3, 4, 5, 6, 8, 10, 12]
for i, n in enumerate(n_values_3, start=1):
    x = np.linspace(0, 1.1, 4001)
    y = n * (((x >= 1 / n) & (x <= 2 / n)).astype(float))
    frame = tmp3 / f"frame_{i:02d}.png"
    save_indicator_plot(
        x=x,
        y=y,
        title=r"Escaping into height infinity: $f_n(x)=n\,\mathbf{1}_{[1/n,\,2/n]}(x)$",
        subtitle=rf"$n={n}$",
        outpath=frame,
        xlim=(0, 1.1),
        ylim=(0, 12.5),
    )
    frames.append(frame)
make_gif_from_frames(frames, BASE / "height_infinity_latex.gif", duration_ms=450)
shutil.rmtree(tmp3)

# 4) Typewriter sequence
tmp4 = BASE / "_frames_typewriter"
tmp4.mkdir(exist_ok=True)
frames = []
for n in range(1, 32):
    k = int(math.floor(math.log2(n)))
    j = n - 2**k
    a = j / 2**k
    b = (j + 1) / 2**k
    x = np.linspace(0, 1, 4001)
    y = ((x >= a) & (x <= b)).astype(float)
    frame = tmp4 / f"frame_{n:02d}.png"
    save_indicator_plot(
        x=x,
        y=y,
        title=r"Typewriter sequence: $f_n(x)=\mathbf{1}_{[j/2^k,\,(j+1)/2^k]}(x)$",
        subtitle=rf"$n={n},\ k={k},\ j={j}$",
        outpath=frame,
        xlim=(0, 1),
        ylim=(0, 1.15),
    )
    frames.append(frame)
make_gif_from_frames(frames, BASE / "typewriter_sequence_latex.gif", duration_ms=260)
shutil.rmtree(tmp4)

markdown = r"""# Escape to infinity — LaTeX-labelled GIFs

![](horizontal_infinity_latex.gif)

![](width_infinity_latex.gif)

![](height_infinity_latex.gif)

![](typewriter_sequence_latex.gif)
"""
(BASE / "escape_to_infinity_latex_gifs.md").write_text(markdown, encoding="utf-8")

with zipfile.ZipFile(BASE / "measure_escape_assets_latex.zip", "w", zipfile.ZIP_DEFLATED) as zf:
    for path in sorted(BASE.glob("*")):
        if path.name != "measure_escape_assets_latex.zip":
            zf.write(path, arcname=path.name)
