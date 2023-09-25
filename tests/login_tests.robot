*** Settings ***
Documentation       Stockbit Login Tests
Resource            ../pages/landing_page.robot
Resource            ../pages/login_page.robot
Resource            ../pages/home_page.robot
Resource            ../steps/login_steps.robot


*** Variables ***
${validUsername}    m.izzul.h.w@gmail.com
${validPassword}    mwafiudin165

*** Test Cases ***
Scenario: Valid login credential
    Login page opened
    User input username and password   ${validUsername}    ${validPassword}
    Click login button
    User directed to home page