function runTest()
{
    FBTest.openNewTab(basePath + "script/breakpoints/7478/issue7478.html", function(win)
    {
        FBTest.enableScriptPanel(function(win)
        {
            var LINE_NUMBER = 9;

            var lineNode = FBTest.getSourceLineNode(LINE_NUMBER);
            var target = lineNode.getElementsByClassName("firebug-line").item(0);
            var config = { tagName: "div", classes: "firebug-line" };
            FBTest.waitForDisplayedElement("script", config, function ()
            {
                FBTest.executeContextMenuCommand(target, "fbEditBreakpointCondition", function ()
                {

                    // xxxFarshid: I don't know why it never gets here!!!!

                });
            });
        });
    });
}
