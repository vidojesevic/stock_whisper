<?php
declare(strict_types=1);

namespace utilities\config;

class Config 
{
    /**
    * get method
    *
    * @param string $path - String path to value of Config credential in array
    * 
    * @return string
    */
    public static function get($path = null): string
    {
        if ($path) {
            $config = $GLOBALS['config'];
            $path = explode('/', $path);

            foreach ($path as $bit) {
                if (isset($config[$bit])) {
                    $config = $config[$bit];
                }
            }

            return strval($config);
        }

        return false;
    }
}

