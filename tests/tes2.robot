*** Settings ***
Library    Collections
Library    OperatingSystem
Resource    ../pages/trading_area_page.robot

*** Variables ***
@{data_order}
...    ['CUAN', 'Petrindo Jaya Kreasi Tbk.', 'Buy', '3020', '270', '9.82']
...    ['ADHI', 'Adhi Karya (Persero) Tbk.', 'Buy', '505', '39', '8.37']
...    ['KIJA', 'Kawasan Industri Jababeka Tbk.', 'Buy', '169', '13', '8.33']

*** Keywords ***

*** Test Cases ***

Scenario 3 : Auto Buy
    #User Activates Trading Area (Virtual)
    FOR    ${row}    IN    @{data_order}
        ${symbol} =    Set Variable    ${row}[0]  # Mengambil kolom pertama dari setiap baris
        Log    ${symbol}
        
        # Sisipkan langkah-langkah berikutnya di sini untuk setiap baris
        #Stock Page Opened    ${symbol}
        #Place Stock Order (Buy)    3    10
        #User directed to Trade Order Page
    END