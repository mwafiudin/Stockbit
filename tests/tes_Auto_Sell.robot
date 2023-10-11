*** Settings ***
Library    Collections
Library    OperatingSystem
Library    String
Library    SeleniumLibrary
Resource    ../pages/trading_area_page.robot
Resource    ../pages/portofolio_page.robot

Resource            ../pages/login_page.robot
Resource            ../steps/login_steps.robot


*** Variables ***
@{data_order}
...    ['CUAN', 'Petrindo Jaya Kreasi Tbk.', '3020', '270', '9.82']
...    ['ADHI', 'Adhi Karya (Persero) Tbk.', '505', '39', '8.37']
...    ['KIJA', 'Kawasan Industri Jababeka Tbk.', '169', '13', '8.33']

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

    # Ambil Data Pembelian Day-1 (Symbol, Lot, Price) dari Database
    FOR    ${element}    IN RANGE    1    ${lastRow}
        Log    ${element}

        Run Keyword If    ${element} != ${1}
        ...    Portofolio Page Opened

        ${inputSymbol}     Get Portofolio Symbol    ${element}
        ${inputLot}        Get Portofolio Avalilable Lot    ${element}
        Continue For Loop If    ${inputLot} == ${0}

        ${currentPrice}    Get Portofolio Current Price    ${element}
        
        Click Pop Up Sell Button    ${element}    #menampilkan Pop Up Sell
        Wait Until Element Is Visible    ${sellModal}    10
        
        Double Click Element    ${sellAddPriceInputModal}
        Click Element    ${sellAddPriceInputModal}

        Input Text    ${sellLotInputModal}      ${inputLot}

        Click Button    ${sellButtonModal}
        Wait Until Element Is Not Visible    ${sellModal}    10

        User directed to Trade Order Page
        Wait Until Element Is Visible    ${statusOrderBuy}    10
        ${Status}    Get Text            ${statusOrderBuy}

        Log    ${Status}
    END

    # Resell bila Rejected



    