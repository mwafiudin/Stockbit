*** Settings ***
Library    Collections
Library    OperatingSystem
Library    String
Library    SeleniumLibrary
Library    RequestsLibrary
Library    JSONLibrary
Library    Collections

Library    ../function/autobuy.py

Resource    ../pages/trading_area_page.robot

Resource            ../pages/landing_page.robot
Resource            ../pages/login_page.robot
Resource            ../steps/login_steps.robot

*** Variables ***
@{data_order}
# [Symbol, Nama, Price, Price Change, Price Change Percentage]
...    ['CUAN', 'Petrindo Jaya Kreasi Tbk.', '3020', '270', '9.82']
...    ['ADHI', 'Adhi Karya (Persero) Tbk.', '505', '39', '8.37']
...    ['KIJA', 'Kawasan Industri Jababeka Tbk.', '169', '13', '8.33']

${total_balance}    ${5000}
${max_percent_used_balance}    ${100}

# ${API_GET_USER}    http://127.0.0.1:5000/get_user

${base_url}    http://127.0.0.1:5000
${child_get_url}    /get_user
${child_post_processing_url}    /update_status_dikerjakan

*** Keywords ***
Get Username and Password from API
    create session    myssion    ${base_url}
    ${response}=    get request    myssion    ${child_get_url}
    
    #validate data
    ${status_code}=    convert to string    ${response.status_code}
    should be equal    ${status_code}    200

    ${contentType}=    get from dictionary    ${response.headers}    Content-Type
    should contain    ${contentType}    application/json

    ${contentString}=    convert to string    ${response.content}
    ${contentData}=    evaluate    json.loads($contentString)    json 
    # log to console    ${contentData}
    log to console    ${contentData['username']}
    ${username}    Set Variable    ${contentData['username']}
    ${password}    Set Variable    ${contentData['password']}
    ${id}    Set Variable    ${contentData['id']}
    [Return]    ${username}    ${password}    ${id}

Post Processing User ID
    [Arguments]                     ${id_user}
    create session    myssion    ${base_url}
    ${response}=      get request    myssion    ${child_post_processing_url}?id_user=${id_user}

    #validate data
    ${status_code}=    convert to string    ${response.status_code}
    should be equal    ${status_code}    200

*** Test Cases ***
Scenario 1: Valid login credential
    # Get Username and Password from API
    Sleep    3
    ${username}    ${password}    ${id} =    Get Username and Password from API
    Post Processing User ID    ${id}
    Login page opened (shortcut)
    User input username and password    ${username}    ${password}
    Click login button
    User directed to home page 
    Run Keyword And Ignore Error    Click Element    xpath=//*[@id="modalnewavatar-button-skip"]

Scenario 2: Trading Area (Virtual) Page
    User Activates Trading Area (Virtual)

Scenario 3 : Auto Buy
    @{symbol}    Create List    # Membuat list kosong untuk menyimpan elemen-elemen kolom pertama
    ${data_order_len}    Get Length    ${data_order}

    ${count_buy}=    show_list_buy  ${data_order}  ${total_balance}  ${max_percent_used_balance}
    FOR    ${index}    IN RANGE    0    ${data_order_len}
        ${is_not_rejected}=    Set Variable    ${False}
        ${count_infinity_loop}=    Set Variable    0
        FOR    ${infinity_loop}    IN RANGE    0    999999
            Log    ${data_order[${index}][2:6]}
            Append To List    ${symbol}    ${data_order[${index}][2:6]}
        
            Stock Page Opened    ${data_order[${index}][2:6]}
            Place Stock Order (Buy)    ${count_buy}    #lot ditaruh disini
            User directed to Trade Order Page
            ${Status}    Get Text    ${statusOrderBuy}

            Log    ${Status}

            # Should Be Equal As Strings    '${Status}'    'REJECTED'
            IF    '${Status}' == 'REJECTED'
                ${is_not_rejected}    Set Variable    ${True}
                ${count_infinity_loop}    Set Variable    ${infinity_loop}
                log    ${is_not_rejected}
                log    ${count_infinity_loop}
                # Set Variable    Exit For Loop
                BREAK
            END

            # Log    ${is_not_rejected}
            # Log    ${count_infinity_loop}
        END
        #Function 
    END
    
    Log List    ${symbol}