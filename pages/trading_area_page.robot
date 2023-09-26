*** Settings ***
Library                             SeleniumLibrary
Library                             OperatingSystem
Resource                            ../pages/home_page.robot

*** Variables ***
${tradingAreaButton}    //*[@id="stockbit-header-web"]/div[2]/div[1]/div
${virtualTradingButton}    //button[@data-cy='virtual-trading-button-auth']
${placeOrderForm}        xpath=//p[text()='Trading Balance']
#${url_stock_page}       https://stockbit.com/symbol/${symbol}
#${symbol}               AALI
${user_pin_field}       /html/body/div[6]/div/div[2]/div/div[2]/div/div/div[1]
#${user_pin}             101010
${addPriceTick}        //*[@id="main-container"]/div[4]/div[2]/div[1]/div[2]/div[1]/div[4]/div/div/div[1]/span[1]   
                        
${orderLotField}        //*[@id="main-container"]/div[4]/div[2]/div[1]/div[2]/div[1]/div[5]/div/div/div[2]/input
# ${orderLotInput}        10
${placeOrderButton}    //*[@id="main-container"]/div[4]/div[2]/div[1]/div[2]/div[2]/button
${placeOrderTable}    //*[@id="main-container"]/div[2]/div[3]/div/div/div

*** Keywords ***
User Activates Trading Area (Virtual)
    Wait Until Element Is Visible    ${tradingAreaButton}
    Click Element                    ${tradingAreaButton}
    Click Button    ${virtualTradingButton}
    Sleep    3
    Wait Until Element Is Visible    ${homeStockbitLogo}

Stock Page Opened
    [Arguments]     ${symbol}   
    Go To        https://stockbit.com/symbol/${symbol}
    Wait Until Element Is Visible    ${homeStockbitLogo}        20

Input PIN and Submit
    [Arguments]                     ${user_pin}
    wait until element is visible   ${user_pin_field}
    input text                      ${user_pin_field}    ${user_pin}

Place Stock Order (Buy)
    [Arguments]    ${orderLotInput}
    # Scroll Element Into View    //*[@id="main-container"]/div[4]/div[2]/div[3]/div[1]
    Wait Until Element Is Visible     ${placeOrderForm}
    Input Text    ${orderLotField}    ${orderLotInput}
    Click Button    ${placeOrderButton}


User directed to Trade Order Page
    Wait Until Element Is Visible    ${placeOrderTable}
    Element Should Be Visible        ${placeOrderTable}
