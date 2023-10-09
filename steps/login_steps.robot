*** Settings ***
Resource            ../pages/landing_page.robot
Resource            ../pages/login_page.robot

*** Variables ***

*** Keywords ***
User input username and password
    [Arguments]     ${username}     ${password}
    Input username  ${username}
    Input password  ${password}