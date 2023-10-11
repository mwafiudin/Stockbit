*** Settings ***
Library                             SeleniumLibrary
Library                             OperatingSystem
Library    XML
Library    Collections
Library    String
Resource                            ../pages/home_page.robot

*** Variables ***

${url_portofolio_page}       https://stockbit.com/trade/portfolio

#Header Portofolio Page 
${totalBalance_portofolio_page}     //div[@class="sc-d6e73f0f-1 fAByFn"]/div[1]/p[1]
${totalInvested_portofolio_page}    //div[@class="sc-d6e73f0f-1 fAByFn"]/div[2]/p[1]
${totalOpen_portofolio_page}        //div[@class="sc-d6e73f0f-1 fAByFn"]/div[3]/p[1]
${totalPL_portofolio_page}          //div[@class="sc-d6e73f0f-1 fAByFn"]/div[4]/p[1]
${totalEquity_portofolio_page}      //div[@class="sc-d6e73f0f-1 fAByFn"]/div[5]/p[1]

#Tabel Portofolio Page
${table_portofolio_page}    //div[@class="ant-table-content"]/table    #row pertama = header

#Button Action (Col 10 after Click)
${ListButton}           //ul[@class="ant-dropdown-menu ant-dropdown-menu-root ant-dropdown-menu-vertical ant-dropdown-menu-light sc-iIPllB sc-dcbe6da0-3 mbjKp edLPOK"]

${buyMoreListButton}    //li[@class="ant-dropdown-menu-item ant-dropdown-menu-item-only-child sc-gicCDI gglNGn"][1]
${sellListButton}    //li[@class="ant-dropdown-menu-item ant-dropdown-menu-item-only-child sc-gicCDI gglNGn"][2]
${viewChartListButton}    //li[@class="ant-dropdown-menu-item ant-dropdown-menu-item-only-child sc-gicCDI gglNGn"][3]
${setPriceAlertListButton}    //li[@class="ant-dropdown-menu-item ant-dropdown-menu-item-only-child sc-gicCDI gglNGn"][4]  

#Modal (Pop Up)
${buyModal}     //div[@class="ant-modal-body"]/div[@class="sc-gKXOVf kgqACx"]

${sellModal}           //div[@class="ant-modal-body"]/div[@class="sc-gKXOVf kgqACx"]
${sellPriceInputModal}      //div[@class="sc-gKXOVf jtzWDU"][4]/div/div/div[2]/input
${sellLotInputModal}        //div[@class="sc-gKXOVf jtzWDU"][3]/div/div/div[2]/input
${sellButtonModal}          //button[@class="ant-btn ant-btn-secondary ant-btn-block sc-ivTmOn egUydP"]

${sellAddPriceInputModal}    //div[@class="sc-gKXOVf jtzWDU"][4]/div/div/div[1]/span[1]

${3rdTickOfferModal}      //table[@class="sc-f06a642a-1 fDgYDk"]/tbody/tr[4]/td[4]/p


*** Keywords ***
Portofolio Page Opened
    Go To        ${url_portofolio_page}
    Wait Until Element Is Visible    //div[@class="ant-table-content"]/table/tbody/tr[1]/td[1]/div/p        10    #cell r1c1
    Sleep    3
    
Click Pop Up Sell Button
    [Arguments]    ${row}
    Click element    //div[@class="ant-table-content"]/table/tbody/tr[${row}]/td[10]/div/button

Click Action Button
    [Arguments]    ${row}
    Click Element    //div[@class="ant-table-content"]/table/tbody/tr[${row}]/td[10]/div/p
    Wait Until Element Is Visible    ${ListButton}

Click Buy More Button
    [Arguments]    ${row}
    Click Action Button    ${row}
    Click Element    ${buyMoreListButton}
    Wait Until Element Is Visible    ${buyModal}

Click Sell Button (list)
    [Arguments]    ${row}
    Click Action Button    ${row}
    Click Element    ${sellListButton}
    Wait Until Element Is Visible    ${sellModal}

Click View Chart Button
    [Arguments]    ${row}
    Click Action Button    ${row}
    Click Element    ${viewChartListButton}
    #Wait Until Element Is Visible    logo stockbit di view chart //div[@id="chartbit"] | https://stockbit.com/symbol/${symbol}}/chartbit
    
Get Portofolio Table row Count
    Wait Until Element Is Visible    ${table_portofolio_page}
    ${countRowPortofolio}    SeleniumLibrary.Get Element Count    //div[@class="ant-table-content"]/table/tbody/tr
    RETURN    ${countRowPortofolio}

Get Portofolio Table Column Count
    Wait Until Element Is Visible    ${table_portofolio_page}
    ${countColPortofolio}    SeleniumLibrary.Get Element Count    //div[@class="ant-table-content"]/table/tbody/tr[1]/td
    RETURN    ${countColPortofolio}z

Get Portofolio Symbol
    [Arguments]    ${row}
    ${symbol}    Get Text    //div[@class="ant-table-content"]/table/tbody/tr[${row}]/td[1]/div/p
    RETURN    ${symbol}

Get Portofolio Balance Lot
    [Arguments]    ${row}
    ${balanceLot}    Get Text    //div[@class="ant-table-content"]/table/tbody/tr[${row}]/td[2]/p
    ${balanceLot}    Convert To Integer    ${balanceLot}
    RETURN    ${balanceLot}

Get Portofolio Avalilable Lot
    [Arguments]    ${row}
    ${availableLot}    Get Text    //div[@class="ant-table-content"]/table/tbody/tr[${row}]/td[3]/p
    ${availableLot}    Convert To Integer    ${availableLot}
    RETURN    ${availableLot}

Get Portofolio Average Price
    [Arguments]    ${row}
    ${averagePrice}    Get Text    //div[@class="ant-table-content"]/table/tbody/tr[${row}]/td[4]/p
    ${averagePrice}    Convert To Integer    ${averagePrice}
    RETURN    ${averagePrice}

Get Portofolio Current Price
    [Arguments]    ${row}
    ${currentPrice}    Get Text    //div[@class="ant-table-content"]/table/tbody/tr[${row}]/td[5]/p
    ${currentPrice}    Remove String    ${currentPrice}    ,    
    ${currentPrice}    Convert To Number    ${currentPrice}
    RETURN    ${currentPrice}

Get Portofolio Invested
    [Arguments]    ${row}
    ${invested}    Get Text    //div[@class="ant-table-content"]/table/tbody/tr[${row}]/td[6]
    ${invested}    Remove String    ${invested}    ,    
    ${invested}    Convert To Number    ${invested}
    RETURN    ${invested}

Get Portofolio Market Value
    [Arguments]    ${row}
    ${marketValue}    Get Text    //div[@class="ant-table-content"]/table/tbody/tr[${row}]/td[7]
    ${marketValue}    Remove String    ${marketValue}    ,    
    ${marketValue}    Convert To Number    ${marketValue}
    RETURN    ${marketValue}

Get Portofolio P/L (Potential)
    [Arguments]    ${row}
    ${pnlPotential}    Get Text    //div[@class="ant-table-content"]/table/tbody/tr[${row}]/td[8]/p
    ${pnlPotential}    Remove String    ${pnlPotential}    ,    
    ${pnlPotential}    Convert To Number    ${pnlPotential}
    RETURN    ${pnlPotential}

Get Portofolio P/L Percentage (Potential)
    [Arguments]    ${row}
    ${pnlPctgPotensial}    Get Text    //div[@class="ant-table-content"]/table/tbody/tr[${row}]/td[9]/p
    ${pnlPctgPotensial}    Remove String    ${pnlPctgPotensial}    ,    
    ${pnlPctgPotensial}    Convert To Number    ${pnlPctgPotensial}
    RETURN    ${pnlPctgPotensial}





