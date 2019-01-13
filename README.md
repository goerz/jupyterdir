Jupyter Config Directory
------------------------

This configuration goes into `~/.jupyter`. It handles the Jupyter Notebook, as
well as jupyter (formerly ipython) console and qtconsole.

Note that the IPython REPL and the IPython kernel still have additional
configuration in `~/.ipython`. Extensions are not part of the configuration. It
is recommended to install notebook extensions (especially spell checking and
TOC) from <https://github.com/ipython-contrib/jupyter_contrib_nbextensions>

See the
[Jupyter manual](https://jupyter.readthedocs.io/en/latest/projects/config.html)
for details. Also see the [Ipython to Jupyter Migration
Guide](http://jupyter.readthedocs.io/en/latest/migrating.html) on how the
Jupyter configuration relates to the older IPython


The current configuration depends on the `notedown`, `jupytext`, `nbdiff` and `nbdime` packages. You
should install this with

    pip install notedown
    pip install jupytext
    pip install nbdiff
    pip install nbdime

before starting a notebook server.

Notebooks can be further themed through the
[`jupyterthemes` package](https://github.com/dunovank/jupyter-themes)

For [JupyterLab](http://jupyterlab.readthedocs.io/en/stable/), some workarounds are required to install extensions in userspace:
https://github.com/jupyterlab/jupyterlab-toc/issues/17
