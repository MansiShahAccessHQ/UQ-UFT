'SystemUtil.Run "C:\Program Files\Google\Chrome\Application\chrome.exe","www.google.com"
Browser("title:=Google").Page("title:=Google").WebEdit("name:=q","type:=text", "index:=0").Set "AccessHQ Brisbane"
Browser("title:=Google").Page("title:=Google").WebButton("value:=Google Search","type:=submit", "index:=1").Click
'Find out the number of search results displayed
'sResults = Browser("title:=AccessHQ Brisbane - Google Search").Page("title:=AccessHQ Brisbane - Google Search").WebElement("html id:=result-stats").GetROProperty("innertext")
sResults = Browser("title:=AccessHQ Brisbane - Google Search").Page("title:=AccessHQ Brisbane - Google Search").WebElement("xpath:=//a[.='Address']//..//..//span","index:=1").GetROProperty("innertext")
' sResults.Assert.Equals("144 Montague Rd, South Brisbane QLD 4101")
' Assert.assertEquals(sResults, "144 Montague Rd, South Brisbane QLD 4101")
'Browser("title:=AccessHQ Brisbane - Google Search").Page("title:=AccessHQ Brisbane - Google Search").WebElement("xpath:=//a[.='Address']//..//..//span","index:=1").Check CheckPoint("144 Montague Rd, South Brisbane QLD 4101")
'Display the Result in a message box
Msgbox sResults
