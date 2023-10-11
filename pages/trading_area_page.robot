*** Settings ***
Library                             SeleniumLibrary
Library                             OperatingSystem
Resource                            ../pages/home_page.robot

*** Variables ***
${tradingAreaButton}    //*[@id="stockbit-header-web"]/div[2]/div[1]/div
${virtualTradingButton}    //button[@data-cy="virtual-trading-button-auth"]
${placeOrderForm}        //div[@class="sc-54e4f53e-4 dRszHO"]
${user_pin_field}       /html/body/div[6]/div/div[2]/div/div[2]/div/div/div[1]
${addPriceTick}        //*[@id="main-container"]/div[4]/div[2]/div[1]/div[2]/div[1]/div[4]/div/div/div[1]/span[1]   
                        
${orderLotField}        //div[@class="sc-gKXOVf jtzWDU"][5]/div/div/div[2]/input
${placeOrderButton}    //button[@class="ant-btn ant-btn-primary ant-btn-block sc-ivTmOn sc-dcd7a266-16 fMuBlv hjKjuY"]
${placeOrderTable}    //table[@style="table-layout: auto;"]
${statusOrderBuy}    //tbody[@class="ant-table-tbody"]/tr[1]/td[2]

*** Keywords ***
User Activates Trading Area (Virtual)
    Wait Until Element Is Visible    ${tradingAreaButton}
    Click Element                    ${tradingAreaButton}
    Sleep    2
    Click Button    ${virtualTradingButton}
    Wait Until Element Is Visible    ${virtualTradingAreaTitle}    20
    #Sleep    10
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
    Sleep    2


User directed to Trade Order Page
    Wait Until Element Is Visible    ${placeOrderTable}    10
    Element Should Be Visible        ${placeOrderTable}    10
