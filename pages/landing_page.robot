*** Settings ***
Library                             SeleniumLibrary

*** Variables ***
${url}                              https:/stockbit.com
${investingMenu}                    //*[@id="landing-wrapper"]/div[1]/div/div[2]/div/div[2]/a[1]
${investingMenuPage}                //*[@id="__next"]/div/div[2]/section[1]/div[1]
${proToolsMenu}                     //*[@id="landing-wrapper"]/div[1]/div/div[2]/div/div[2]/a[2]
${proToolsPage}                     //*[@id="__next"]/div/div[2]/div[1]
${academyMenu}                      //*[@id="landing-wrapper"]/div[1]/div/div[2]/div/div[2]/a[3]
${academyPage}                      //*[@id="root"]/div/main
${aboutUsMenu}                      //*[@id="landing-wrapper"]/div[1]/div/div[2]/div/div[2]/a[4]
${aboutUsPage}                      //*[@id="__next"]
${blogMenu}                         //*[@id="landing-wrapper"]/div[1]/div/div[2]/div/div[2]/a[5]
${blogPage}                         //*[@id="canvas"]/div[2]
${helpMenu}                         //*[@id="landing-wrapper"]/div[1]/div/div[2]/div/div[2]/a[6]
${helpPage}                         //*[@id="body"]/div/div/section[1]
${signUpButton}                     //*[@id="landing-wrapper"]/div[1]/div/div[2]/div/div[2]/div/div[2]/a
${signUpPage}                       //*[@id="__next"]/div/div[3]/div
${loginMenu}                        //*[@id="landing-wrapper"]/div[1]/div/div[2]/div/div[2]/div/div[1]/a
${loginPage}                        //*[@id="__next"]/div/div[3]/div

*** Keywords ***
Landing page opened
    open browser    ${url}  chrome
    maximize browser window

User click menu investing
    wait until page contains element    ${investingMenu}    10
    click element   ${investingMenu}

User click menu pro tools
    wait until page contains element    ${proToolsMenu}    10
    click element   ${proToolsMenu}

User click menu academy
    wait until page contains element    ${academyMenu}    10
    click element   ${academyMenu}

User click menu about us
    wait until page contains element    ${aboutUsMenu}    10
    click element   ${aboutUsMenu}

User click menu blog
    wait until page contains element    ${blogMenu}    10
    click element   ${blogMenu}

User click menu help
    wait until page contains element    ${helpMenu}    10
    click element   ${helpMenu}

User click sign up button
    wait until page contains element    ${signUpButton}    10
    click element   ${signUpButton}

User click login button
    wait until page contains element    ${loginMenu}    10
    click element   ${loginMenu}

User should be directed to investing page
    wait until page contains element    ${investingMenuPage}    10

User should be directed to pro tools page
    wait until page contains element    ${proToolsPage}    10

User should be directed to academy page
    wait until page contains element    ${academyPage}    10

User should be directed to about us page
    wait until page contains element    ${aboutUsPage}    10

User should be directed to blog page
    wait until page contains element    ${blogPage}    10

User should be directed to help page
    wait until page contains element    ${helpPage}    10

User should be directed to sign up page
    wait until page contains element    ${signUpPage}    10

User should be directed to login page
    wait until page contains element    ${loginPage}    10

Browser is closed
    close browser

