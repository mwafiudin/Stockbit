*** Settings ***
Resource            ../pages/landing_page.robot
Resource            ../pages/register_page.robot

*** Variables ***

*** Keywords ***
User fill register form
    [Arguments]     ${fullName}     ${email}    ${username}     ${password}     ${confirmPassword}
    Input full name     ${fullName}
    Input email         ${email}
    Input username      ${username}
    Input password      ${password}
    Confirm password    ${confirmPassword}