*** Settings ***
Documentation       Stockbit Register Tests
Resource            ../pages/landing_page.robot
Resource            ../pages/register_page.robot
Resource            ../steps/register_steps.robot

*** Variables ***
${validFullName}    your_full_name
${validEmail}       valid_email@example.com
${validUsername}    your_valid_username
${validPassword}    your_valid_password

*** Test Cases ***
Scenario: Register with valid credential
    Given Register page opened
    When User click register with email button
    And User fill register form   ${validFullName}     ${validEmail}       ${validUsername}    ${validPassword}    ${validPassword}
    And Click register button
    Then User directed to home page