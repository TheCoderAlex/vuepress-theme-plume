import { h } from 'vue'
import type { FunctionalComponent } from 'vue'
import { IconBase } from './IconBase'

export const GithubIcon: FunctionalComponent = () =>
  h(IconBase, { name: 'github', viewBox: '0 0 1024 1024' }, () =>
    h('path', {
      d: 'M512 0C229.283787 0 0.142041 234.942803 0.142041 524.867683c0 231.829001 146.647305 428.553077 350.068189 497.952484 25.592898 4.819996 34.976961-11.38884 34.976961-25.294314 0-12.45521-0.469203-45.470049-0.725133-89.276559-142.381822 31.735193-172.453477-70.380469-172.453477-70.380469-23.246882-60.569859-56.816233-76.693384-56.816234-76.693385-46.493765-32.58829 3.540351-31.948468 3.540351-31.948467 51.356415 3.71097 78.356923 54.086324 78.356923 54.086324 45.683323 80.19108 119.817417 57.072162 148.993321 43.593236 4.649376-33.91059 17.915029-57.029508 32.50298-70.167195-113.675122-13.222997-233.151301-58.223843-233.1513-259.341366 0-57.285437 19.919806-104.163095 52.678715-140.846248-5.246544-13.265652-22.820334-66.626844 4.990615-138.884127 0 0 42.996069-14.076094 140.760939 53.787741 40.863327-11.644769 84.627183-17.445825 128.177764-17.6591 43.465272 0.213274 87.271782 6.014331 128.135109 17.6591 97.679561-67.906489 140.59032-53.787741 140.59032-53.787741 27.938914 72.257282 10.407779 125.618474 5.118579 138.884127 32.844219 36.683154 52.593405 83.560812 52.593405 140.846248 0 201.586726-119.646798 245.990404-233.663158 258.957473 18.341577 16.208835 34.721032 48.199958 34.721032 97.210357 0 70.167195-0.639822 126.7275-0.639823 143.960051 0 14.033439 9.213443 30.370239 35.190235 25.209005 203.250265-69.527373 349.769606-266.123484 349.769605-497.867175C1023.857959 234.942803 794.673558 0 512 0',
      fill: '#3E75C3',
    })
  )
GithubIcon.displayName = 'GithubIcon'

export const EmailIcon: FunctionalComponent = () =>
  h(IconBase, { name: 'email', viewBox: '0 0 1024 1024' }, () => [
    [
      h('path', {
        d: 'M848.76288 333.62432H164.99712C99.32288 333.62432 46.08 386.87232 46.08 452.54144v297.28768c0 65.67424 53.24288 118.92224 118.91712 118.92224h683.77088c65.66912 0 118.91712-53.24288 118.91712-118.92224V452.54144c-0.00512-65.66912-53.248-118.91712-118.92224-118.91712z',
        fill: '#96383D',
      }),
      h('path', {
        d: 'M639.8208 51.2h-474.8288a44.58496 44.58496 0 0 0-44.59008 44.59008v609.44896a44.57984 44.57984 0 0 0 44.59008 44.59008h683.776a44.58496 44.58496 0 0 0 44.59008-44.59008V304.73728L639.8208 51.2z',
        fill: '#EBE2CE',
      }),
      h('path', {
        d: 'M551.4752 229.57568H209.59232v44.59008h341.88288v-44.59008zM209.59232 794.42432h594.58048v-44.5952H209.59232v44.5952z m0-89.18528h594.58048v-44.5952H209.59232v44.5952z m0-178.37568h594.58048v-44.5952H209.59232v44.5952z m0 89.18528h594.58048v-44.59008H209.59232v44.59008z m0-222.96576v44.59008h594.58048v-44.59008H209.59232z',
        fill: '#C9C1B1',
      }),
      h('path', {
        d: 'M941.83936 393.31328L75.60704 955.02848c12.89216 10.93632 29.29664 17.77152 47.44192 17.77152H893.5936c40.91904 0 74.09152-33.4592 74.09152-74.74688V449.60768c-0.00512-22.58432-10.14784-42.58816-25.84576-56.2944z',
        fill: '#D54D54',
      }),
      h('path', {
        d: 'M71.99232 396.5696C56.25344 410.18368 46.08 430.08512 46.08 452.54144v445.93152C46.08 939.53024 79.34976 972.8 120.40192 972.8h772.95104c18.20672 0 34.65216-6.79424 47.56992-17.664L71.99232 396.5696z',
        fill: '#EA5455',
      }),
      h('path', {
        d: 'M655.52384 66.90816v236.8l237.82912 74.89024V304.73728z',
        fill: '',
      }),
      h('path', {
        d: 'M640.66048 52.0448v207.2576a44.58496 44.58496 0 0 0 44.5952 44.5952h207.2576l-251.8528-251.8528z',
        fill: '#FFFBF2',
      }),
    ],
  ])
EmailIcon.displayName = 'EmailIcon'

export const ZhiHuIcon: FunctionalComponent = () =>
  h(IconBase, { name: 'zhiHu', viewBox: '0 0 1024 1024' }, () => [
    h('path', {
      d: 'M512 73.28A438.72 438.72 0 1 0 950.72 512 438.72 438.72 0 0 0 512 73.28z m-98.56 458.88l-16.8 66.88 23.68-20.8s53.92 61.28 64 76.48 1.44 68.96 1.44 68.96l-92.48-113.12s-29.12 101.12-68.48 124.16a97.6 97.6 0 0 1-80 6.56 342.08 342.08 0 0 0 85.44-89.76 382.88 382.88 0 0 0 39.52-119.36h-115.04s8.8-40.48 24.16-41.6 90.88 0 90.88 0l-1.76-124.8-43.2 2.24a96 96 0 0 1-32 48c-24.16 17.44-38.4 10.88-38.4 10.88s42.72-118.24 55.84-141.28 50.4-25.12 50.4-25.12l-23.04 66.72h147.84c17.6 0 18.56 40.64 18.56 40.64h-90.56v122.56s61.28-2.24 81.12 0 19.68 41.6 19.68 41.6z m329.44 160h-91.52l-65.12 46.24-13.6-46.24h-36.96v-368h208z',
      fill: '#49C0FB',
    }),
    h('path', {
      d: 'M602.88 691.68l54.88-41.44h43.04V364.64h-121.12v285.6h11.2l12 41.44z',
      fill: '#49C0FB',
    }),
  ])
ZhiHuIcon.displayName = 'ZhiHuIcon'

export const WeiBoIcon: FunctionalComponent = () =>
  h(IconBase, { name: 'weiBo', viewBox: '0 0 1024 1024' }, () => [
    h('path', {
      d: 'M448.698182 482.210909c-96.814545 4.654545-175.010909 56.785455-175.010909 121.949091s78.196364 114.501818 175.010909 109.847273S623.709091 647.912727 623.709091 582.749091c-0.930909-64.232727-79.127273-105.192727-175.010909-100.538182z m65.163636 164.770909c-29.789091 39.098182-88.436364 57.716364-145.221818 26.065455-26.996364-14.894545-26.065455-43.752727-26.065455-43.752728s-11.170909-92.16 85.643637-103.330909c97.745455-12.101818 115.432727 81.92 85.643636 121.018182z',
      fill: '#EA5D5C',
    }),
    h('path', {
      d: 'M448.698182 584.610909c-6.516364 4.654545-7.447273 13.032727-3.723637 18.618182 2.792727 5.585455 11.170909 6.516364 16.756364 1.861818 5.585455-4.654545 8.378182-13.032727 4.654546-18.618182-2.792727-5.585455-10.24-6.516364-17.687273-1.861818zM403.083636 597.643636c-18.618182 1.861818-30.72 17.687273-30.72 33.512728 0 14.894545 14.894545 26.065455 32.581819 24.203636 17.687273-1.861818 32.581818-15.825455 32.581818-31.650909s-13.963636-27.927273-34.443637-26.065455z',
      fill: '#EA5D5C',
    }),
    h('path', {
      d: 'M512 0C229.003636 0 0 229.003636 0 512s229.003636 512 512 512 512-229.003636 512-512S794.996364 0 512 0z m197.352727 626.501818C669.323636 712.145455 538.065455 754.036364 441.250909 746.589091c-92.16-7.447273-211.316364-38.167273-223.418182-151.738182 0 0-6.516364-51.2 42.821818-117.294545 0 0 70.749091-99.607273 152.669091-128.465455 82.850909-27.927273 92.16 19.549091 92.16 48.407273-4.654545 24.203636-12.101818 38.167273 18.618182 28.858182 0 0 80.989091-38.167273 114.501818-4.654546 26.996364 26.996364 4.654545 65.163636 4.654546 65.163637s-11.170909 12.101818 12.101818 16.756363c21.410909 3.723636 94.021818 37.236364 53.992727 122.88z m-80.058182-236.450909c-8.378182 0-15.825455-7.447273-15.825454-15.825454 0-9.309091 7.447273-15.825455 15.825454-15.825455 0 0 99.607273-18.618182 87.505455 89.367273v1.861818c-0.930909 7.447273-7.447273 13.963636-15.825455 13.963636-9.309091 0-15.825455-7.447273-15.825454-15.825454 0-1.861818 15.825455-73.541818-55.854546-57.716364zM797.789091 493.381818c-2.792727 18.618182-12.101818 11.170909-22.341818 11.170909-13.032727 0-23.272727-16.756364-23.272728-29.789091 0-11.170909 4.654545-22.341818 4.654546-22.341818 0.930909-4.654545 12.101818-34.443636-7.447273-78.196363-35.374545-60.509091-106.123636-60.509091-114.501818-57.716364-8.378182 3.723636-21.410909 5.585455-21.410909 5.585454-13.032727 0-23.272727-10.24-23.272727-23.272727 0-11.170909 7.447273-19.549091 16.756363-22.341818 0 0 0 0.930909 0.930909 0.930909s1.861818 0.930909 1.861819 0.930909c10.24-1.861818 45.614545-4.654545 79.127272 3.723637 62.370909 14.894545 146.152727 83.781818 108.916364 211.316363z',
      fill: '#EA5D5C',
    }),
  ])
WeiBoIcon.displayName = 'WeiBoIcon'

// <svg t="1648887372594" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3602" width="200" height="200"><path d="" fill="#68A5E1" p-id="3603"></path></svg>
export const QQIcon: FunctionalComponent = () =>
  h(IconBase, { name: 'qq', viewBox: '0 0 1024 1024' }, () =>
    h('path', {
      d: 'M512.268258 64.433103c-247.183323 0-447.569968 200.380501-447.569968 447.563825 0 247.189467 200.385621 447.570992 447.569968 447.570992s447.569968-200.380501 447.569968-447.569968c0-247.184347-200.386645-447.564849-447.569968-447.564849z m252.85872 584.692787c-18.997168 16.287968-43.668709-53.628042-47.2134-42.875198-8.642616 26.161294-12.695154 43.646184-38.148944 72.127602-1.35972 1.521494 29.43056 12.647032 38.148944 36.396051 8.346713 22.756875 24.596797 58.811973-81.725503 70.125906-62.389428 6.635801-107.471099-33.244533-111.964932-32.85648-8.325212 0.734126-4.618747 0-13.568528 0-7.321804 0-7.807126 0.534468-14.69685 0-1.899307-0.140272-22.632985 32.85648-115.364231 32.85648-71.878798 0-90.48177-45.243445-76.032701-70.125906 14.464428-24.877342 38.579999-32.122354 35.176604-36.06636-16.73643-19.39546-28.287904-40.1404-35.176604-58.882621-1.705793-4.666869-3.135137-9.209848-4.262434-13.574672-2.611931-10.008479-22.627866 58.76385-44.111028 42.875198-21.483162-15.883533-19.567472-56.309597-5.659014-95.003248 14.033372-39.006959 49.37687-76.562049 49.771065-84.854496 1.412962-30.849665-3.044011-35.975235 0-44.078263 6.780169-18.149391 15.034732-11.190043 15.034733-20.609788 0-118.64476 88.172909-214.829571 196.933079-214.829571 108.755051 0 196.928984 96.184811 196.928984 214.829571 0 4.554242 11.815637 0 17.474651 20.609788 1.165181 4.256291 1.968931 20.684531 0.58771 44.078263-0.658358 11.238165 29.954789 24.914202 45.777913 84.854496 15.845649 59.945414 0 88.215912-7.909514 95.003248z',
      fill: '#68A5E1',
    })
  )
QQIcon.displayName = 'QQIcon'

export const TwitterIcon: FunctionalComponent = () =>
  h(IconBase, { name: 'twitter', viewBox: '0 0 1024 1024' }, () => [
    h('path', {
      d: 'M512.274401 959.556658c247.17718 0 447.556658-200.366167 447.556658-447.556658 0-247.16387-200.379477-447.556658-447.556658-447.556658-247.188443 0-447.569968 200.392788-447.569968 447.556658 0 247.190491 200.382549 447.556658 447.569968 447.556658',
      fill: '#78CBEF',
    }),
    h('path', {
      d: 'M736.810405 394.754891c-16.48353 7.310541-34.227463 12.256931-52.82122 14.478763 19.004336-11.383557 33.588558-29.396772 40.435279-50.868671-17.780793 10.536804-37.440415 18.183179-58.42392 22.294079-16.741549-17.872942-40.666677-29.038412-67.134113-29.038412-50.766282 0-91.948998 41.192954-91.948998 91.972548 0 7.220439 0.784296 14.222791 2.366199 20.943574-76.439183-3.841618-144.191723-40.421969-189.587726-96.109044-7.915657 13.630985-12.452493 29.422369-12.452493 46.282688 0 31.877646 16.241893 60.042683 40.924696 76.552835-15.072616-0.460748-29.26981-4.637177-41.682371-11.485946v1.131393c0 44.585086 31.698466 81.757243 73.804725 90.185867-7.723167 2.160398-15.841554 3.239573-24.246628 3.239574a91.24866 91.24866 0 0 1-17.294447-1.63105c11.691747 36.527109 45.654023 63.139936 85.90705 63.845394-31.477307 24.682804-71.144672 39.382725-114.227718 39.382725-7.42624 0-14.762379-0.410578-21.946982-1.270642 40.706609 26.070168 89.057546 41.308653 140.992081 41.308653 169.209337 0 261.697922-140.132017 261.697922-261.695874 0-3.997248-0.078839-7.979138-0.244709-11.899595a186.466924 186.466924 0 0 0 45.883373-47.618859',
      fill: '#FFFFFF',
    }),
  ])
TwitterIcon.displayName = 'TwitterIcon'

export const FacebookIcon: FunctionalComponent = () =>
  h(IconBase, { name: 'facebook', viewBox: '0 0 1024 1024' }, () => [
    h('path', {
      d: 'M512.262115 959.556658c247.175132 0 447.569968-200.366167 447.569968-447.556658 0-247.16387-200.394836-447.556658-447.569968-447.556658-247.17718 0-447.556658 200.392788-447.556658 447.556658-0.001024 247.190491 200.378454 447.556658 447.556658 447.556658',
      fill: '#537BBC',
    }),
    h('path', {
      d: 'M404.292383 436.216104h46.269378v-44.969044c0-19.828563 0.499656-50.408946 14.904699-69.347753 15.172957-20.05689 36.000832-33.690947 71.826579-33.690946 58.371702 0 82.952117 8.326235 82.952118 8.326235l-11.564785 68.550147s-19.285904-5.576079-37.275569-5.57608c-17.99888 0-34.111763 6.449454-34.111764 24.438095v52.269346h73.791416l-5.152191 66.958004h-68.639225v232.604221h-86.731278V503.174108h-46.269378v-66.958004z',
      fill: '#FFFFFF',
    }),
  ])
FacebookIcon.displayName = 'FacebookIcon'

export const LinkedinIcon: FunctionalComponent = () =>
  h(IconBase, { name: 'linkedin', viewBox: '0 0 1024 1024' }, () => [
    h('path', {
      d: 'M512.267234 959.569968c247.223255 0 447.572016-200.400979 447.572016-447.582255 0-247.171037-200.347737-447.558705-447.572016-447.558705-247.194586 0-447.568944 200.387669-447.568944 447.558705 0 247.1823 200.373334 447.582255 447.568944 447.582255',
      fill: '#1284C7',
    }),
    h('path', {
      d: 'M387.013295 699.188763h-87.249365V419.999808h87.249365v279.188955z m-45.860848-314.114707h-0.628666c-31.57048 0-52.042043-21.341866-52.042043-48.378582 0-27.573232 21.086918-48.478922 53.286064-48.478922 32.175596 0 51.975491 20.852449 52.607228 48.402131 0.001024 27.046955-20.430608 48.455373-53.222583 48.455373z m394.899259 314.114707H637.125954V554.711376c0-37.815157-15.457597-63.618091-49.496664-63.61809-26.03126 0-40.488521 17.410146-47.233878 34.204937-2.518758 6.013279-2.133777 14.405043-2.133777 22.820356v151.06916h-98.001184s1.273713-255.921161 0-279.188955h98.001184v43.815125c5.794167-19.157918 37.097413-46.5018 87.093733-46.5018 61.986018 0 110.696338 40.168045 110.696338 126.630041v155.246613z',
      fill: '#FFFFFF',
    }),
  ])
LinkedinIcon.displayName = 'LinkedinIcon'
