<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-type" content="text/html; charset=utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="icon" href="favicon-black.png" id="light-scheme-icon">
        <link rel="icon" href="favicon-white.png" id="dark-scheme-icon">

        <title><?php echo $title_for_layout; ?></title>
        <?php
        echo $this->Html->css('vendors290d7bd1', ['pathPrefix' => 'wp-dist/']);
        echo $this->Html->css('home4b6f04ab', ['pathPrefix' => 'wp-dist/']);
        ?>
        <script type="text/javascript">
            var WEBROOT = '<?php echo $this->Url->webroot('') ?>';

            //--dynamic favicon
            lightSchemeIcon = document.querySelector('link#light-scheme-icon');
            darkSchemeIcon = document.querySelector('link#dark-scheme-icon');

            //Css matcher
            matcher = window.matchMedia('(prefers-color-scheme: dark)');
            matcher.addListener(onUpdate);
            onUpdate();

            function onUpdate() {
                if (matcher.matches) {
                    lightSchemeIcon.remove();
                    document.head.append(darkSchemeIcon);
                } else {
                    document.head.append(lightSchemeIcon);
                    darkSchemeIcon.remove();
                }
            }
            //--
        </script>
    
    </head>

    <body>
        <?php echo $this->fetch('content'); ?>
    </body>
    <?php
    echo $this->Html->script('vendors290d7bd1', ['pathPrefix' => 'wp-dist/']);
    echo $this->Html->script('home4b6f04ab', ['pathPrefix' => 'wp-dist/']);
    ?>
</html>