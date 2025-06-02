<?php
if (rex::isBackend() && rex_be_controller::getCurrentPagePart(1) === 'mediapool') {
    rex_view::addJsFile($this->getAssetsUrl('sort.js'));
}
