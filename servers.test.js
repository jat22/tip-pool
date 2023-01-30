describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();
    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should update server table', function(){
    submitServerInfo();
    updateServerTable();
    
    let updatedTable = document.querySelectorAll('#serverTable tbody tr td');

    expect(updatedTable.length).toEqual(2);
    expect(updatedTable[0].innerHTML).toEqual('Alice');
    expect(updatedTable[1].innerHTML).toEqual('$0.00');
 
  })

  afterEach(function() {
    serverTbody.innerHTML = '';
    serverId = 0;
    allServers = {};
  });
});
