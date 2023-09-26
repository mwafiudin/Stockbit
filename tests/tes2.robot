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
...    ['CUAN', 'Petrindo Jaya Kreasi Tbk.', 'Buy', '3020', '270', '9.82']
...    ['ADHI', 'Adhi Karya (Persero) Tbk.', 'Buy', '505', '39', '8.37']
...    ['KIJA', 'Kawasan Industri Jababeka Tbk.', 'Buy', '169', '13', '8.33']

*** Keywords ***   


*** Test Cases ***
Scenario 1: Valid login credential
    Login page opened (shortcut)
    User input username and password    farrezalhakim@gmail.com    tonytonychopper123
    Click login button
    User directed to home page 

    Run Keyword And Ignore Error    Click Element    xpath=//*[@id="modalnewavatar-button-skip"]

Scenario 2: Trading Area (Virtual) Page
    User Activates Trading Area (Virtual)
Scenario 3 : Auto Buy
    #User Activates Trading Area (Virtual)
    FOR    ${row}    IN    @{data_order}
    #Data Cleaning #1
        Log    ${row}
        ${symbol} =    Set Variable    ${row}[2]${row}[3]${row}[4]${row}[5]  # Mengambil kolom pertama dari setiap baris
        # Log    ${symbol}
        # Log To Console    ${symbol}
        # Sisipkan langkah-langkah berikutnya di sini untuk setiap baris
        Stock Page Opened    ${symbol}
        Place Stock Order (Buy)    3
        User directed to Trade Order Page
    END