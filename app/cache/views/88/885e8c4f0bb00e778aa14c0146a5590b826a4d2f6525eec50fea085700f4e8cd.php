<?php

/* organisms/welcome/welcome.twig */
class __TwigTemplate_d4ceff6cad51fae07434158dbb75958a95f6b15ce4a392e9847e1e564b4bdb54 extends Twig_Template
{
    private $source;

    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        // line 1
        $this->parent = $this->loadTemplate("layout/default.twig", "organisms/welcome/welcome.twig", 1);
        $this->blocks = array(
            'body' => array($this, 'block_body'),
        );
    }

    protected function doGetParent(array $context)
    {
        return "layout/default.twig";
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    // line 3
    public function block_body($context, array $blocks = array())
    {
        // line 4
        echo "<video class=\"video video--fullscreen\" autoplay loop muted>
  <source src=\"data/disaster.mp4\" type=\"video/mp4\">
</video>
<div class=\"card card--centered\">
  <h1 class=\"h1 m-b\">
    ";
        // line 9
        echo twig_escape_filter($this->env, ($context["title"] ?? null), "html", null, true);
        echo "
  </h1>
  <p class=\"p p--lead m-b\">
    <s-icon icon=\"address-book\"></s-icon>
    ";
        // line 13
        echo twig_escape_filter($this->env, ($context["description"] ?? null), "html", null, true);
        echo "
  </p>
  <img src=\"";
        // line 15
        echo twig_escape_filter($this->env, ($context["image"] ?? null), "html", null, true);
        echo "\" />
</div>
";
    }

    public function getTemplateName()
    {
        return "organisms/welcome/welcome.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  54 => 15,  49 => 13,  42 => 9,  35 => 4,  32 => 3,  15 => 1,);
    }

    public function getSourceContext()
    {
        return new Twig_Source("", "organisms/welcome/welcome.twig", "/Users/olivierbossel/data/web/coffeekraken/html-boilerplate/app/views/organisms/welcome/welcome.twig");
    }
}
