*** Settings ***
Library    Collections
Library    OperatingSystem
Library    String
Library    SeleniumLibrary
Resource    ../pages/trading_area_page.robot

Resource            ../pages/landing_page.robot
Resource            ../pages/login_page.robot
Resource            ../steps/login_steps.robot

*** Variables ***
@{data_order}
...    [
...    'Kawasan Industri Jababeka Tbk.', 'Buy', '169', '13', '8.33']

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

Scenario 3 : Auto Buy
    @{symbol}    Create List    # Membuat list kosong untuk menyimpan elemen-elemen kolom pertama
    ${data_order_len}    Get Length    ${data_order}

    FOR    ${index}    IN RANGE    0    ${data_order_len}
        Log    ${data_order[${index}][2:6]}
        Append To List    ${symbol}    ${data_order[${index}][2:6]}
        
        Stock Page Opened    ${data_order[${index}][2:6]}
        Place Stock Order (Buy)    3
        User directed to Trade Order Page
        ${Status}    Get Text    ${statusOrderBuy}

        Log    ${Status}
    END
    
    Log List    ${symbol}