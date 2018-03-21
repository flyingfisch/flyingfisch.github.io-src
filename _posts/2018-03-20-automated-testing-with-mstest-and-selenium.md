---
author: Mark Fischer, Jr.
title: Setting up  automated testing with MSTest and Selenium
date: 2018-03-20 00:00:00 +0000
layout: post
categories:
- testing
---
I've started implementing automated testing on a project I'm working on using MSTest and Selenium. I've run into several issues that I couldn't find answers for online so I thought I'd document my findings here.

# Creating the test project

Create the project using the "Unit Test" template in Visual Studio. As far as I understand the naming convention for test projects is usually `ProjectBeingTested.Tests`. 

Add the following nuget packages to the project: `Selenium.WebDriver` and `Selenium.Support`. You will also need to add nuget packages for the browsers you want to test with. I used `Selenium.Firefox.WebDriver`. For some reason the browser nuget packages are third party and not made by the Selenium team, but you need them so that the browser executables are in the right directory.

# Getting the tests to run in the same browser

Most of the examples online show something like this:

```csharp
[TestClass]
public class HomeControllerTests
{
    [TestMethod]
    public void HomePage_WhenSuccessful_PageTitleIsHome
    {
    	using (var driver = new FirefoxDriver())
        {
            driver.Navigate().GoToUrl("http://localhost/MyWebsite/");
            
            Assert.IsTrue(driver.Title == "Home");
        }
    }
}
```

The issue with this is that each test method will use it's own browser, meaning that every single test will need to open a new browser, which is slow (around 3 seconds on my machine).

Instead, the following code can be used to have all tests in the test class use the same browser:

```csharp
[TestClass]
public class HomeControllerTests
{
    private static RemoteDriver driver;
    
    [ClassInitialize]
    public static void ClassInitialize(TestContext context)
    {
    	// initialize the web driver
    	driver = new FirefoxDriver();
    }
    
    [ClassCleanup]
    public static void ClassCleanup()
    {
    	// close the web driver
        driver.Dispose();
    }
    
    [TestCleanup]
    public void TestCleanup
    {
    	// delete the cookies. interestingly there was an example for this in the selenium documentation for all supported languages _except_ C#
        // I <3 incomplete documentation
        driver.Manage().Cookies.DeleteAllCookies();
    }
    
    [TestMethod]
    public void HomePage_WhenSuccessful_PageTitleIsHome
    {
       	driver.Navigate().GoToUrl("http://localhost/MyWebsite/");
            
        Assert.IsTrue(driver.Title == "Home");
    }
}
```

This logic can be abstracted away into an abstract class which has the added benefit of allowing all test classes in the assembly to use the same browser.

```csharp
[TestClass]
public abstract class Tests
{
    public static RemoteDriver driver { get; private set; }
    
    [ClassInitialize]
    public static void ClassInitialize(TestContext context)
    {
    	driver = new FirefoxDriver();
    }
    
    [ClassCleanup]
    public static void ClassCleanup()
    {
        driver.Dispose();
    }
    
    [TestCleanup]
    public void TestCleanup
    {
        driver.Manage().Cookies.DeleteAllCookies();
    }
}

[TestClass]
public class HomeControllerTests : Tests
{
    [TestMethod]
    public void HomePage_WhenSuccessful_PageTitleIsHome
    {
    	driver.Navigate().GoToUrl("http://localhost/MyWebsite/");
            
        Assert.IsTrue(driver.Title == "Home");
    }
}
```

# Going forward

I'll be blogging further findings as I get to them, at the moment I'm only about a week into test driven development (or behavior driven development or acceptance driven development or whatever it is we're doing here). This post has just been about setting up the project structure, I'll be getting into actual test writing and Continuous Integration using TFS in future posts. I might also add other web drivers or a headless web driver as this develops.