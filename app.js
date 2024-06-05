const callAPI = async () => {
  const key = `key`;
  const endpoint = `http://apis.data.go.kr/6300000/eventDataService/`;
  const view = `eventDataListJson?serviceKey=`;
  const row = `&numOfRows=10&pageNo=1`;
  const url = endpoint + view + key + row;
  const xhr = new XMLHttpRequest();

  await xhr.open("GET", url, true);

  xhr.addEventListener('load', async () => {
    if (xhr.status == 200) {
      const result = await JSON.parse(xhr.responseText);
      let main = document.getElementById('main')
      let list = document.createElement('ul')

      result.msgBody.forEach(element => {
        let innerList = document.createElement('ul');
        let attribue = ['beginDt', 'title']

        for (let i = 0; i < attribue.length; i++) {
          let li = document.createElement('li');
          li.innerHTML = element[attribue[i]]
          innerList.appendChild(li);
        }
        list.appendChild(innerList)
      });
      main.appendChild(list)
    }
  })
  xhr.send()
}

window.onload = () => {
  callAPI();
}



