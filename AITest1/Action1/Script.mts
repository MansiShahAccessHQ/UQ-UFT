AIUtil.SetContext Browser("creationtime:=0")
Browser("creationtime:=0").Navigate "https://www.google.com"
AIUtil("search").Search "AccessHQ Brisbane"
AIUtil.FindTextBlock("Address: 144 Montague Rd, South Brisbane QLD 4101").CheckExists True

