<?php

declare(strict_types=1);

namespace Cachemock;

use Monolog\Logger;
use Monolog\Handler\StreamHandler;

final class Log
{
    private const LOG_PATH = __DIR__ . '/../logs/log';
    public $logger;
    
    public function __construct()
    {
        $this->logger = new Logger('name');
        $this->logger->pushHandler(new StreamHandler(self::LOG_PATH, Logger::WARNING));
    }
}

?>