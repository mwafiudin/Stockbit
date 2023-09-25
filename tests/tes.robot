*** Settings ***
Library    Collections
Library    OperatingSystem  
Resource    ../pages/trading_area_page.robot
Resource    ../pages/login_page.robot
Resource    ../steps/login_steps.robot

*** Variables ***
${validUsername}    m.izzul.h.w@gmail.com
${validPassword}    mwafiudin165    

*** Test Cases ***
Scenario 1: Valid login credential
    Login page opened (shortcut)
    User input username and password   ${validUsername}    ${validPassword}
    Click login button
    User directed to home page 
    Run Keyword And Ignore Error    Click Element    xpath=//*[@id="modalnewavatar-button-skip"]

Scenario 3 : Auto Buy
    User Activates Trading Area (Virtual)
    Stock Page Opened    AALI
    Place Stock Order (Buy)    3    10
    User directed to Trade Order Page
    #Repeat order bila rejected