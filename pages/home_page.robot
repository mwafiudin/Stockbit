*** Settings ***
Library                             SeleniumLibrary

*** Variables ***
${homeStockbitLogo}     //*[@id="stockbit-header-web"]/div[1]/div[1]/div[1]/a
${homeSearchBar}        //*[@id="stockbit-header-web"]/div[1]/div[1]/div[1]/form/div/div/span[1]
${profileIcon}          //*[@id="stockbit-header-web"]/div[1]/div[1]/div[2]/div[3]/div
${watchlistMenu}        //*[@id="stockbit-header-web"]/div[1]/div[2]/div[1]/div[3]/a/a[2]
${watchlistPage}        //*[@id="main-container"]/div/div[2]/div[2]/div/div/div/div/div/div/div/div/table/tbody

*** Keywords ***
User directed to home page
    wait until element is visible   ${homeStockbitLogo}     10
    element should be visible       ${homeSearchBar}
    wait until element is visible   ${homeSearchBar}        10
    element should be visible       ${homeSearchBar}
    wait until element is visible   ${profileIcon}        10
    element should be visible       ${profileIcon}

User click menu Watchlist    
    Wait Until Element Is Visible    ${watchlistMenu}        20
    click element   ${watchlistMenu}

User should be directed to Watchlist page
    wait until page contains element    ${watchlistPage}    10

