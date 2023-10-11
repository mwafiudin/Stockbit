*** Settings ***
Library                             SeleniumLibrary
Library                             OperatingSystem
Resource                            ../pages/home_page.robot

*** Variables ***

${url_order_page}       https://stockbit.com/trade/order

#Header Order Page 
${totalBalance_order_page}     //div[@class="sc-d6e73f0f-1 fAByFn"]/div[1]/p[1]
${totalInvested_order_page}    //div[@class="sc-d6e73f0f-1 fAByFn"]/div[2]/p[1]
${totalOpen_order_page}        //div[@class="sc-d6e73f0f-1 fAByFn"]/div[3]/p[1]
${totalPL_order_page}          //div[@class="sc-d6e73f0f-1 fAByFn"]/div[4]/p[1]
${totalEquity_order_page}      //div[@class="sc-d6e73f0f-1 fAByFn"]/div[5]/p[1]

#Tabel Order Page
${table_order_page}    //div[@class="ant-table-content"]/table    #dengan header

${row_order_page}    //tbody[@class="ant-table-tbody"]/tr
${column_order_page}    //tbody[@class="ant-table-tbody"]/tr[1]/td



*** Keywords ***
Order Page Opened
    Go To        https://stockbit.com/trade/order
    Wait Until Element Is Visible    ${table_order_page}        20

