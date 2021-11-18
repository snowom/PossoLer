<?php

$files = new FilesystemIterator(__DIR__, FilesystemIterator::SKIP_DOTS);
echo iterator_count($files) . ' arquivos';

?>