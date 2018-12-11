<?php

/* layout/footer.twig */
class __TwigTemplate_6f08554d7582a3a4628f5b733c352942cf8b244ee41700209a70b03b69e25e4b extends Twig_Template
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
        echo "\t";
        if (($context["js_variables"] ?? null)) {
            // line 2
            echo "\t\t<script>
      ";
            // line 3
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable(($context["js_variables"] ?? null));
            foreach ($context['_seq'] as $context["key"] => $context["value"]) {
                // line 4
                echo "\t\t\t\twindow.";
                echo twig_escape_filter($this->env, $context["key"], "html", null, true);
                echo " = ";
                echo twig_escape_filter($this->env, json_encode($context["value"]), "html", null, true);
                echo ";
\t\t\t";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['key'], $context['value'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 6
            echo "\t\t</script>
\t";
        }
        // line 8
        echo "
\t";
        // line 9
        if (($context["stylesheets"] ?? null)) {
            // line 10
            echo "\t\t<!-- Stylesheets -->
\t\t";
            // line 11
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable(($context["stylesheets"] ?? null));
            foreach ($context['_seq'] as $context["_key"] => $context["stylesheet"]) {
                // line 12
                echo "\t\t\t";
                if ($context["stylesheet"]) {
                    // line 13
                    echo "\t\t\t\t<link rel=\"stylesheet\" href=\"";
                    echo twig_escape_filter($this->env, $context["stylesheet"], "html", null, true);
                    echo "\" type=\"text/css\">
\t\t\t";
                }
                // line 15
                echo "\t\t";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['stylesheet'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 16
            echo "\t";
        }
        // line 17
        echo "
\t";
        // line 18
        if (($context["scripts"] ?? null)) {
            // line 19
            echo "\t\t<!-- Scripts -->
\t\t";
            // line 20
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable(($context["scripts"] ?? null));
            foreach ($context['_seq'] as $context["_key"] => $context["script"]) {
                // line 21
                echo "\t\t\t";
                if ($context["script"]) {
                    // line 22
                    echo "\t\t\t\t<script src=\"";
                    echo twig_escape_filter($this->env, $context["script"], "html", null, true);
                    echo "\"></script>
\t\t\t";
                }
                // line 24
                echo "\t\t";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['script'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 25
            echo "\t";
        }
        // line 26
        echo "
\t";
        // line 27
        if (($context["webfonts"] ?? null)) {
            // line 28
            echo "\t\t<!-- Webfonts -->
\t\t<script src=\"https://ajax.googleapis.com/ajax/libs/webfont/1.5.18/webfont.js\"></script>
\t\t<script>
\t\t\tWebFont.load({
\t\t\t\tgoogle: {
\t\t\t\t\tfamilies: [
\t\t\t\t\t\t";
            // line 34
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable(($context["webfonts"] ?? null));
            foreach ($context['_seq'] as $context["_key"] => $context["webfont"]) {
                // line 35
                echo "\t\t\t\t\t\t\t'";
                echo twig_escape_filter($this->env, $context["webfont"], "html", null, true);
                echo "',
\t\t\t\t\t\t";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['webfont'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 37
            echo "\t\t\t\t\t]
\t\t\t\t}
\t\t\t});
\t\t</script>
\t";
        }
        // line 42
        echo "
\t";
        // line 43
        echo ($context["html"] ?? null);
        echo "

\t</body>
</html>
";
    }

    public function getTemplateName()
    {
        return "layout/footer.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  144 => 43,  141 => 42,  134 => 37,  125 => 35,  121 => 34,  113 => 28,  111 => 27,  108 => 26,  105 => 25,  99 => 24,  93 => 22,  90 => 21,  86 => 20,  83 => 19,  81 => 18,  78 => 17,  75 => 16,  69 => 15,  63 => 13,  60 => 12,  56 => 11,  53 => 10,  51 => 9,  48 => 8,  44 => 6,  33 => 4,  29 => 3,  26 => 2,  23 => 1,);
    }

    public function getSourceContext()
    {
        return new Twig_Source("", "layout/footer.twig", "/Users/olivierbossel/data/web/coffeekraken/html-boilerplate/app/views/layout/footer.twig");
    }
}
