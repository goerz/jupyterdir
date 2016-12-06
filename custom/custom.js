IPython.CodeCell.options_default.cm_config.autoCloseBrackets = false;

// Hide header and toolbar by default
$([IPython.events]).on("app_initialized.NotebookApp", function () {
    $('div#header-container').hide();
    $('div#maintoolbar').hide();
});
