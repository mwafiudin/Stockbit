*** Settings ***
Library    Collections
Library    OperatingSystem
Library    String
Library    SeleniumLibrary
Resource    ../pages/trading_area_page.robot
Resource    ../pages/portofolio_page.robot


Resource            ../pages/landing_page.robot
Resource            ../pages/login_page.robot
Resource            ../steps/login_steps.robot


*** Variables ***
@{data_order}
...    ['CUAN', 'Petrindo Jaya Kreasi Tbk.', '3020', '270', '9.82']
...    ['ADHI', 'Adhi Karya (Persero) Tbk.', '505', '39', '8.37']
...    ['KIJA', 'Kawasan Industri Jababeka Tbk.', '169', '13', '8.33']

${element}    4


*** Keywords ***   


*** Test Cases ***
Scenario 1: Valid login credential
    Login page opened (shortcut)
    User input username and password    m.izzul.h.w@gmail.com    mwafiudin165
    Click login button
    User directed to home page 

    Run Keyword And Ignore Error    Click Element    xpath=//*[@id="modalnewavatar-button-skip"]

Scenario 2: Trading Area (Virtual) Page
    User Activates Trading Area (Virtual)

Scenario 3 : Auto Sell
    Portofolio Page Opened
    
    ${lastCol}    Get Portofolio Table Column Count
    ${lastRow}    Get Portofolio Table Row Count
    ${data_order_len}    Get Length    ${data_order}
    
    Get Portofolio Avalilable Lot   ${element} 
    Get Portofolio Average Price    ${element}
    Get Portofolio Balance Lot    ${element}
    Get Portofolio Current Price    ${element}
    Get Portofolio Invested    ${element}
    Get Portofolio Market Value    ${element}
    Get Portofolio P/L (Potential)    ${element}
    Get Portofolio Symbol    ${element}
    Get Portofolio Table Column Count
    Get Portofolio Table row Count   


    