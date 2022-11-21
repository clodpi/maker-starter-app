import HOTSPOT from './hotspot.svg'
import { MakerHotspot } from '../hotspotMakerTypes'

const CLODPI_HOTSPOT = {
  name: 'ClodPi Hotspot (Indoor & Outdoor) ',
  icon: HOTSPOT,
  onboardType: 'QR',
  translations: {
    en: {
      externalOnboard: 'Connect to the hotspot Wifi and scan the QR code',
    },
    ja: {},
    ko: {},
    zh: {},
  },
} as MakerHotspot

export default { CLODPI_HOTSPOT }
