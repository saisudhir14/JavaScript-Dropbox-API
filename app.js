import { Dropbox } from 'dropbox';

const dbx = new Dropbox({
  accessToken: 'aeOL1E1HS0AAAAAAAAAALX6z1ogWy75HGE_HBN-NNpJNfhnEa1kjF1vsJ_t7Wf8k',
  fetch
})

// http://dropbox.github.io/dropbox-sdk-js/Dropbox.html

dbx.filesListFolder({
  path: ''
}).then(res => console.log(res))