<?php

/* layout/default.twig */
class __TwigTemplate_e73633c9fe8a20493787ba0068af1ec41104d98c9c9837f9a737ccb5380d34a1 extends Twig_Template
{
    private $source;

    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = array(
            'body' => array($this, 'block_body'),
            'footer' => array($this, 'block_footer'),
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        // line 1
        $this->loadTemplate("layout/header.twig", "layout/default.twig", 1)->display($context);
        // line 2
        echo "
";
        // line 3
        $this->displayBlock('body', $context, $blocks);
        // line 4
        echo "
";
        // line 5
        $this->displayBlock('footer', $context, $blocks);
        // line 8
        echo "
";
    }

    // line 3
    public function block_body($context, array $blocks = array())
    {
    }

    // line 5
    public function block_footer($context, array $blocks = array())
    {
        // line 6
        $this->loadTemplate("layout/footer.twig", "layout/default.twig", 6)->display($context);
    }

    public function getTemplateName()
    {
        return "layout/default.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  50 => 6,  47 => 5,  42 => 3,  37 => 8,  35 => 5,  32 => 4,  30 => 3,  27 => 2,  25 => 1,);
    }

    public function getSourceContext()
    {
        return new Twig_Source("", "layout/default.twig", "/Users/olivierbossel/data/web/coffeekraken/html-boilerplate/app/views/layout/default.twig");
    }
}
