*** Settings ***
Documentation       Stockbit Landing Page Tests
Resource            ../pages/landing_page.robot

*** Test Cases ***
Scenario: User access menu Investing
    Given Landing page opened
    When User click menu investing
    Then User should be directed to investing page
    And Browser is closed

Scenario: User access menu Pro Tools
    Given Landing page opened
    When User click menu pro tools
    Then User should be directed to pro tools page
    And Browser is closed

Scenario: User access menu Academy
    Given Landing page opened
    When User click menu academy
    Then User should be directed to academy page
    And Browser is closed

Scenario: User access menu About Us
    Given Landing page opened
    When User click menu about us
    Then User should be directed to about us page
    And Browser is closed

Scenario: User access menu Blog
    Given Landing page opened
    When User click menu blog
    Then User should be directed to blog page
    And Browser is closed

Scenario: User access menu Help
    Given Landing page opened
    When User click menu help
    Then User should be directed to help page
    And Browser is closed

Scenario: User click Sign Up button
    Given Landing page opened
    When User click sign up button
    Then User should be directed to sign up page
    And Browser is closed

Scenario: User click Login button
    Given Landing page opened
    When User click login button
    Then User should be directed to login page
    And Browser is closed

