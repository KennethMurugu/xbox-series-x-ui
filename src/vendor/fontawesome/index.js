import Vue from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBatteryFull, faMicrophone } from '@fortawesome/free-solid-svg-icons'

library.add(faMicrophone, faBatteryFull)

Vue.component('fa-icon', FontAwesomeIcon)