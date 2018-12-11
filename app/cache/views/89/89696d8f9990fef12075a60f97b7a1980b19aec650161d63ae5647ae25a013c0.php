<?php

/* layout/header.twig */
class __TwigTemplate_ebba0c045e85f62663100a0d91f26ce5631e75fe782b24f060d37be88208152d extends Twig_Template
{
    private $source;

    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = array(
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        // line 1
        echo "<!doctype html>
<html lang=\"";
        // line 2
        echo twig_escape_filter($this->env, ($context["lang"] ?? null), "html", null, true);
        echo "\">
\t<head>
\t\t<!-- Config -->
\t\t<meta charset=\"";
        // line 5
        echo twig_escape_filter($this->env, ($context["charset"] ?? null), "html", null, true);
        echo "\">
    <meta http-equiv=\"x-ua-compatible\" content=\"ie=edge\">
    <meta http-equiv=\"content-type\" content=\"text/html\">
    <meta name=\"distribution\" content=\"web\">
    ";
        // line 9
        if (($context["noindex"] ?? null)) {
            // line 10
            echo "      <meta name=\"robots\" content=\"noindex,nofollow\">
    ";
        } else {
            // line 12
            echo "      <meta name=”robots” content=”index,follow”>
    ";
        }
        // line 14
        echo "    ";
        if (($context["viewport"] ?? null)) {
            // line 15
            echo "      <meta name=\"viewport\" content=\"";
            echo twig_escape_filter($this->env, ($context["viewport"] ?? null), "html", null, true);
            echo "\">
    ";
        } else {
            // line 17
            echo "      <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">
    ";
        }
        // line 19
        echo "
\t\t<!-- Metas -->
\t\t";
        // line 21
        if (($context["title"] ?? null)) {
            // line 22
            echo "\t\t\t<title>";
            echo twig_escape_filter($this->env, ($context["title"] ?? null), "html", null, true);
            echo "</title>
\t\t";
        }
        // line 24
        echo "\t\t";
        if (($context["description"] ?? null)) {
            // line 25
            echo "\t\t\t<meta name=\"description\" content=\"";
            echo twig_escape_filter($this->env, ($context["description"] ?? null), "html", null, true);
            echo "\">
\t\t";
        }
        // line 27
        echo "\t\t";
        if (($context["keywords"] ?? null)) {
            // line 28
            echo "\t\t\t<meta name=\"keywords\" content=\"";
            echo twig_escape_filter($this->env, twig_join_filter(($context["keywords"] ?? null), ","), "html", null, true);
            echo "\">
\t\t";
        }
        // line 30
        echo "
\t\t";
        // line 31
        if ( !(($context["og"] ?? null) === false)) {
            // line 32
            echo "\t\t\t<!-- Schema.org markup for Facebook -->
\t\t\t";
            // line 33
            if (($context["current_url"] ?? null)) {
                // line 34
                echo "\t\t\t\t<meta property=\"og:url\" content=\"";
                echo twig_escape_filter($this->env, ($context["current_url"] ?? null), "html", null, true);
                echo "\" />
\t\t\t";
            }
            // line 36
            echo "\t\t\t<meta property=\"og:type\" content=\"website\" />
\t\t\t";
            // line 37
            if (($context["title"] ?? null)) {
                // line 38
                echo "\t\t\t\t<meta property=\"og:title\" content=\"";
                echo twig_escape_filter($this->env, ($context["title"] ?? null), "html", null, true);
                echo "\" />
\t\t\t";
            }
            // line 40
            echo "\t\t\t";
            if (($context["description"] ?? null)) {
                // line 41
                echo "\t\t\t\t<meta property=\"og:description\" content=\"";
                echo twig_escape_filter($this->env, ($context["description"] ?? null), "html", null, true);
                echo "\" />
\t\t\t";
            }
            // line 43
            echo "\t\t\t";
            if (($context["sharing_image"] ?? null)) {
                // line 44
                echo "\t\t\t\t<meta property=\"og:image\" content=\"";
                echo twig_escape_filter($this->env, ($context["sharing_image"] ?? null), "html", null, true);
                echo "\" />
\t\t\t";
            }
            // line 46
            echo "\t\t";
        }
        // line 47
        echo "
\t\t";
        // line 48
        if ( !(($context["twitter"] ?? null) === false)) {
            // line 49
            echo "\t\t\t<!-- Schema.org markup for Twitter -->
\t\t\t";
            // line 50
            if (($context["current_url"] ?? null)) {
                // line 51
                echo "\t\t\t\t<meta name=\"twitter:url\" content=\"";
                echo twig_escape_filter($this->env, ($context["current_url"] ?? null), "html", null, true);
                echo "\">
\t\t\t";
            }
            // line 53
            echo "\t\t\t";
            if (($context["title"] ?? null)) {
                // line 54
                echo "\t\t\t\t<meta name=\"twitter:title\" content=\"";
                echo twig_escape_filter($this->env, ($context["title"] ?? null), "html", null, true);
                echo "\">
\t\t\t";
            }
            // line 56
            echo "\t\t\t";
            if (($context["description"] ?? null)) {
                // line 57
                echo "\t\t\t\t<meta name=\"twitter:description\" content=\"";
                echo twig_escape_filter($this->env, ($context["description"] ?? null), "html", null, true);
                echo "\">
\t\t\t";
            }
            // line 59
            echo "\t\t\t";
            if (($context["sharing_image"] ?? null)) {
                // line 60
                echo "\t\t\t\t<meta name=\"twitter:image:src\" content=\"";
                echo twig_escape_filter($this->env, ($context["sharing_image"] ?? null), "html", null, true);
                echo "\">
\t\t\t";
            }
            // line 62
            echo "\t\t";
        }
        // line 63
        echo "
\t\t<!-- Schema.org markup for Google+ -->
\t\t";
        // line 65
        if (($context["title"] ?? null)) {
            // line 66
            echo "\t\t\t<meta itemprop=\"name\" content=\"";
            echo twig_escape_filter($this->env, ($context["title"] ?? null), "html", null, true);
            echo "\">
\t\t";
        }
        // line 68
        echo "\t\t";
        if (($context["description"] ?? null)) {
            // line 69
            echo "\t\t\t<meta itemprop=\"description\" content=\"";
            echo twig_escape_filter($this->env, ($context["description"] ?? null), "html", null, true);
            echo "\">
\t\t";
        }
        // line 71
        echo "\t\t";
        if (($context["sharing_image"] ?? null)) {
            // line 72
            echo "\t\t\t<meta itemprop=\"image\" content=\"";
            echo twig_escape_filter($this->env, ($context["sharing_image"] ?? null), "html", null, true);
            echo "\">
\t\t";
        }
        // line 74
        echo "
\t\t";
        // line 75
        if (($context["critical_css"] ?? null)) {
            // line 76
            echo "\t\t\t<style>
\t\t\t\t";
            // line 77
            echo ($context["critical_css"] ?? null);
            echo "
\t\t\t</style>
\t\t";
        }
        // line 80
        echo "
\t\t";
        // line 81
        if (($context["stylesheets"] ?? null)) {
            // line 82
            echo "\t\t\t<!-- Stylesheets -->
      ";
            // line 83
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable(($context["stylesheets"] ?? null));
            foreach ($context['_seq'] as $context["_key"] => $context["stylesheet"]) {
                // line 84
                echo "\t\t\t\t";
                if ($context["stylesheet"]) {
                    // line 85
                    echo "\t\t\t\t\t<link rel=\"stylesheet\" href=\"";
                    echo twig_escape_filter($this->env, $context["stylesheet"], "html", null, true);
                    echo "\" type=\"text/css\">
\t\t\t\t";
                }
                // line 87
                echo "\t\t\t";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['stylesheet'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 88
            echo "\t\t";
        }
        // line 89
        echo "
\t\t";
        // line 90
        if (($context["scripts"] ?? null)) {
            // line 91
            echo "\t\t\t<!-- Scripts -->
      ";
            // line 92
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable(($context["scripts"] ?? null));
            foreach ($context['_seq'] as $context["_key"] => $context["script"]) {
                // line 93
                echo "\t\t\t\t";
                if ($context["script"]) {
                    // line 94
                    echo "\t\t\t\t\t<script src=\"";
                    echo twig_escape_filter($this->env, $context["script"], "html", null, true);
                    echo "\"></script>
\t\t\t\t";
                }
                // line 96
                echo "\t\t\t";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['script'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 97
            echo "\t\t";
        }
        // line 98
        echo "
    ";
        // line 99
        echo ($context["html"] ?? null);
        echo "

\t\t";
        // line 101
        if (($context["google_tag_manager_id"] ?? null)) {
            // line 102
            echo "\t\t\t<!-- Google Tag Manager -->
\t\t\t<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
\t\t\tnew Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
\t\t\tj=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
\t\t\t'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
\t\t\t})(window,document,'script','dataLayer','";
            // line 107
            echo twig_escape_filter($this->env, ($context["google_tag_manager_id"] ?? null), "html", null, true);
            echo "');</script>
\t\t\t<!-- End Google Tag Manager -->
\t\t";
        }
        // line 110
        echo "
    ";
        // line 111
        if (($context["google_analytics_id"] ?? null)) {
            // line 112
            echo "      <!-- Global Site Tag (gtag.js) - Google Analytics -->
      <script async src=\"https://www.googletagmanager.com/gtag/js?id=";
            // line 113
            echo twig_escape_filter($this->env, ($context["google_analytics_id"] ?? null), "html", null, true);
            echo "\"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '";
            // line 118
            echo twig_escape_filter($this->env, ($context["google_analytics_id"] ?? null), "html", null, true);
            echo "');
      </script>
    ";
        }
        // line 121
        echo "
\t</head>
\t<body class=\"";
        // line 123
        echo twig_escape_filter($this->env, ($context["body_class"] ?? null), "html", null, true);
        echo "\">

\t\t";
        // line 125
        if (($context["google_tag_manager_id"] ?? null)) {
            // line 126
            echo "\t\t\t<!-- Google Tag Manager (noscript) -->
\t\t\t<noscript><iframe src=\"https://www.googletagmanager.com/ns.html?id=";
            // line 127
            echo twig_escape_filter($this->env, ($context["google_tag_manager_id"] ?? null), "html", null, true);
            echo "\"
\t\t\theight=\"0\" width=\"0\" style=\"display:none;visibility:hidden\"></iframe></noscript>
\t\t\t<!-- End Google Tag Manager (noscript) -->
\t\t";
        }
    }

    public function getTemplateName()
    {
        return "layout/header.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  349 => 127,  346 => 126,  344 => 125,  339 => 123,  335 => 121,  329 => 118,  321 => 113,  318 => 112,  316 => 111,  313 => 110,  307 => 107,  300 => 102,  298 => 101,  293 => 99,  290 => 98,  287 => 97,  281 => 96,  275 => 94,  272 => 93,  268 => 92,  265 => 91,  263 => 90,  260 => 89,  257 => 88,  251 => 87,  245 => 85,  242 => 84,  238 => 83,  235 => 82,  233 => 81,  230 => 80,  224 => 77,  221 => 76,  219 => 75,  216 => 74,  210 => 72,  207 => 71,  201 => 69,  198 => 68,  192 => 66,  190 => 65,  186 => 63,  183 => 62,  177 => 60,  174 => 59,  168 => 57,  165 => 56,  159 => 54,  156 => 53,  150 => 51,  148 => 50,  145 => 49,  143 => 48,  140 => 47,  137 => 46,  131 => 44,  128 => 43,  122 => 41,  119 => 40,  113 => 38,  111 => 37,  108 => 36,  102 => 34,  100 => 33,  97 => 32,  95 => 31,  92 => 30,  86 => 28,  83 => 27,  77 => 25,  74 => 24,  68 => 22,  66 => 21,  62 => 19,  58 => 17,  52 => 15,  49 => 14,  45 => 12,  41 => 10,  39 => 9,  32 => 5,  26 => 2,  23 => 1,);
    }

    public function getSourceContext()
    {
        return new Twig_Source("", "layout/header.twig", "/Users/olivierbossel/data/web/coffeekraken/html-boilerplate/app/views/layout/header.twig");
    }
}
