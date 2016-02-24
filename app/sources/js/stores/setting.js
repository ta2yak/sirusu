import Alt from '../alt'
import SettingActions from '../actions/setting'
import UUID from '../stores/helpers/uuid'

class SettingStore {

  // **************************************************** 
  // コンストラクタ
  // **************************************************** 
  constructor() {
    this.bindActions(SettingActions)
    this.visibleSettingView = false
    this.dataPath = localStorage.getItem('dataPath') || ''
  }

  onShow() {
    this.visibleSettingView  = true
  }

  onHide() {
    this.visibleSettingView  = false
  }

  onSave(data) {
    localStorage.setItem('dataPath', data.dataPath)
    this.dataPath  = data.dataPath
  }

}

export default Alt.createStore(SettingStore, 'SettingStore')