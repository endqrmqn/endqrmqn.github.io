import numpy as np
from scipy.integrate import solve_ivp
import matplotlib.pyplot as plt
from matplotlib.colors import LinearSegmentedColormap

sigma, rho, beta = 10, 28, 8/3

def lorenz(t, state):
    x, y, z = state
    return [sigma*(y - x), x*(rho - z) - y, x*y - beta*z]

dark_colors = LinearSegmentedColormap.from_list(
    "white_to_purple", ["#ffffff", "#d6b4fc", "#a57aff", "#7e4fff"]
)(np.linspace(0, 1, 12))
light_colors = LinearSegmentedColormap.from_list(
    "black_to_purple",
    ["#000000", "#2b0f3a", "#5a1f80", "#7e4fff"]
)(np.linspace(0, 1, 12))

t_eval = np.linspace(0, 60, 20000)

fig = plt.figure(figsize=(10, 10), facecolor="white")
ax = fig.add_subplot(111, projection='3d', aspect='auto')
ax.set_facecolor("white")

for i, c in enumerate(light_colors):
    init = [1.0 + 0.02*i, 1.0 - 0.015*i, 1.0 + 0.01*i]
    sol = solve_ivp(lorenz, (0, 60), init, t_eval=t_eval, rtol=1e-8, atol=1e-10)
    ax.plot(sol.y[0], sol.y[1], sol.y[2], color=c, lw=0.05, alpha=0.55)

ax.view_init(elev=-34, azim=-38, roll=5)
# -83, -90, 50 for black bg
# -34, -38, 5 for white bg
ax.set_xlim([-100, 100])
ax.set_ylim([-100, 100])
ax.set_zlim([-100, 100])
xlim = ax.get_xlim()
ylim = ax.get_ylim()
zlim = ax.get_zlim()
def _shrink(lim, factor=0.45):
    c = 0.5 * (lim[0] + lim[1])
    h = 0.5 * (lim[1] - lim[0]) * factor
    return (c - h, c + h)

ax.set_xlim(_shrink(xlim, 0.45))
ax.set_ylim(_shrink(ylim, 0.45))
ax.set_zlim(_shrink(zlim, 0.45))

ax.set_axis_off()
ax.set_position([0, 0, 1, 1])
fig.subplots_adjust(left=0, right=1, bottom=0, top=1)
plt.margins(0)
plt.savefig("python/imagegeneration/lorenzwhite.png", dpi=1600, bbox_inches=None, facecolor="white")
plt.show()
plt.close()
