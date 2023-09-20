*** Settings ***
Documentation       Stockbit Login Tests
Resource            ../pages/landing_page.robot
Resource            ../pages/login_page.robot
Resource            ../pages/home_page.robot
Resource            ../steps/login_steps.robot


*** Variables ***
${validUsername}    m.izzul.h.w@gmail.com
${validPassword}    mwafiudin165    
${CountSymbol}

*** Test Cases ***
Scenario 1: Valid login credential
    Login page opened
    User input username and password   ${validUsername}    ${validPassword}
    Click login button
    User directed to home page 
    #JIka pop up muncul, klik button dibawah, jika selain itu, lanjut perintah 
    ${is visible}=    Run Keyword And Return Status    //*[@id="modalnewavatar-button-skip"]
    Run Keyword If    ${is visible}    Click Button   //*[@id="modalnewavatar-button-skip"]
    # Click Button    //*[@id="modalnewavatar-button-skip"]

Scenario 2: Screening Watchlist Page
    User click menu Watchlist
    User should be directed to Watchlist page
    Wait Until Element Is Enabled    //*[@id="main-container"]/div/div[2]/div[2]/div/div/div/div/div/div/div/div/table/thead/tr/th[2]   
    Double Click Element    //*[@id="main-container"]/div/div[2]/div[2]/div/div/div/div/div/div/div/div/table/thead/tr/th[2]
    Wait Until Element Is Visible     xpath://*[@id="main-container"]/div/div[2]/div[2]/div/div/div/div/div/div/div/div/table/tbody
    ${count_baris_tabel}    get element count    xpath://*[@id="main-container"]/div/div[2]/div[2]/div/div/div/div/div/div/div/div/table/tbody/tr
    log to console    ${count_baris_tabel}