import React, { Component } from 'react'
import GoogleMap from 'google-map-react'
import decodePolyline from 'decode-google-map-polyline';
import Marker from './Extras/Marker'
import { isNumber } from 'util';

const googleMapsKey = `${process.env.REACT_APP_GOOGLE_MAPS_KEY}`;

const polyline = 'k|biJo~emBkf@flAeXfnBmt@l|@oO|EsYxUicAfVg\\jMyu@zf@ez@vgAyy@dp@yz@|rBwCzFuq@b`@gf@dWwZxYyB`@q{Ar~A{AzA_r@ng@ae@vF_C`BsXjC_q@n[q[~YqE`C{dCxyBm_AjKclAqh@yBaAqo@wMgnBtb@ygB~J{pAu_@ou@qC}x@xMwc@cO}bBoiBwe@wUwtBw_@mn@_N@a@A`@shAsZwm@fc@qZhgAqHnmAe@`hA`KveEqEthBiVxzAeNl]{n@xhAy|@|`@_b@tYyz@h]ooAj}@Is@kcElvCgxBpl@y|An_@sIxF_mDpkEmt@h{AqsDruIqm@vbAgwAtBceA~LwTkGqx@gv@cm@mhAc|@g|AcfAuv@u`Cm~C}QqKwVwMk}A{rAmLgEiwCmTmt@jB}`@gR_{@aK?Miu@qJe{@|TeiAxJgwCw{@CPcu@sSe{G}HghBi@uyD|_A}r@eAigD`u@gx@l~@_Vlr@qAdEg`@`gBaTxyA{T~z@}kB`vDuy@~xAyT`OoeAhYkwB|iCie@`xAm~@r{Doj@|`AuwA`eAaa@l`AgBnCif@rtBkmE`cMeo@zgAq_@j`@ug@j\\_j@zXadA~LwnDih@@Ou{@yNg`@qRsm@em@crBiiBiz@_Xm_BpG}mB{e@mv@lFimAt_AkHxDy{KxcC@`@yKhC{p@vk@yb@`yAiVbtBue@fgByOrmBmDj~BnPdzFsHneEwKzwE_Bx|BiPxg@oy@pgAcPp`@sk@dn@aBlB_@~Ayr@lkA}t@mzAwYwDed@jCmg@jm@{mB|dEeNd{@ef@zz@eh@bkByk@rtAwCpuB_`@~sCilAlxFe]jQ_`@bQsc@jy@yaAz`AufAxn@ew@pUcr@vhA}i@nk@{h@jkCyHzxFkY`jAcHhkCqN~rAApu@kf@jwDeUnn@gcAvaBkc@x`@ak@djDyb@nMk_@iN}d@wNmn@c]u_A_CkkDnoBme@jQqv@no@k{Ajd@m~AvRg_Ahp@ek@zS{sB@wcA|k@w|@@ap@}e@iqAciB_}@{`BcbCmjCm}@}Fqu@pz@cOnZeq@v{Akr@~g@ot@rUch@kJkeAtvAuoAb}@mj@hd@i{@duAq_@f]uUzo@i~@zv@e[bjA}Mtq@oDlu@yc@rnD_q@lb@Fv@u`@pZ_\\np@_{@hqA_m@`_Co_Az|A_r@~iBqp@~Hw~@r`AuWz`@eY~v@adA`qDqj@d}@_S~bAgnApbCg~@xXmUoE}{As[_cAvd@o]qJot@rb@un@qQwiBkrCib@vHiq@PsiBnbAca@|y@av@zo@qbA`Tg^l@{`@cSu|@b`@}Zvc@g[bOu]c@mqAvKyBWer@mCwYlRwkA|Ogv@dmAqh@vWqw@feAs]jw@c^h[cy@fSmr@hrBqjCpMed@xaAoiAdsAeXzk@uFz\\oKfy@uXdyGsUzfCk]~uA{Un_@{j@hy@_s@d^cUcHkd@kc@ehBm}@s_BwTkbBgSqmBvfAej@rL}|@cGwf@xi@_MHwmCmd@{c@dM}x@~qAqFbSsg@fmD{e@fsBKSwj@dvBacA|HsJj_@oZ`mDy_@jg@}\\hmAog@hiAea@nm@qg@Oal@sQcv@pfAq]xX_i@vmAaa@vqAcn@rgDwk@vG_g@kr@mc@_PgsA{L_b@`Va}Aa|@ys@eLcaAxYsa@zi@en@dxAml@d`Cwz@dgAke@bg@sg@d_Cao@|oAcm@nd@gWdb@wk@jYax@xoAyXz\\}l@rpAuXfX_m@hcBk[bm@uNju@i{@|wAeFny@gs@|qEq\\xl@cq@|nBg_AljAik@lOoi@pf@}~@iD{z@xh@o_@sHms@xA_w@wp@qP`Tyc@r_BkoAbsAaw@rQsh@_s@kU}k@eZy_@oj@{Nwf@qp@cv@tEgbAbl@cu@mj@wt@uxA_YaBuy@ld@it@bo@kh@hiAk[r_Bsm@niBcg@ruB{dAnhCyw@|n@c[xo@mZ`_Bwu@fuCsuAd}DesAzlAkW~h@w_B~m@sb@vl@cVj_A{d@|{@yZdVixAh`@ge@c}A{Ss~Ay`Aoi@u}@zSg`AnBa]kcBw@_sC{_@ieBnByrCwCqi@u_@e`DeDol@sb@yiFnO_|ArWmmAid@iz@{Dzp@m@pF_]ltBuCt_Ayl@rwCu]raD{l@xjAwkAj~Am]dl@gcAxfAs[`h@_g@|c@w}@rVy]wFwgAz@wpBnQi}@{d@eP`H_|@b`Aej@`\\}[~EinAft@mm@zKa{@hnAog@jvCmYje@cg@bZgm@bGg}@hiAqtAbn@wb@zl@eoAndAaq@rVel@djCquAncAkeApwAev@i`@cg@liDw[duAkf@vvAaBlBkG|EwbBd_@mhAjGwn@cJ}|An{@qi@`|AsS~iAyOpCyv@cOyhAvj@jEnzA|Rju@eAf_@}HfaGl^|}AgGlcCsc@neB_XvhCc]hs@{cAcOeyApp@xGjwAtc@pg@}n@|pD}`@r{@{x@xkBqz@~y@gB`jBiVvm@cc@hRkt@`{@mb@lcAuJjj@{\\fn@wX~jAoi@`uAqj@t{@elA~_EujBblDkbChrBoPla@cdBnwDmt@vq@a|@dd@esB`bEk]lhAgL|`@u_@zoC_f@jyBuHneAuZp}AgTnd@cg@biBel@zeA}Vb]eUvCcpAaKcx@sn@e\\|z@wr@pqA{t@lxCk]`kCkm@djCuz@voA}n@vpAmo@bOcdAsGkWlOsrAjmBqkAr_Ca^|x@_~AprAqe@j}@ql@x_Ak[jrCoEpJk[jo@ep@tnB_XhdBTpwCvUb~BrIhtCwKrfBZzpBdDnShWfdBzdArsBlc@lxA`dAfvAfFxe@dS`nF~m@xaDPtv@{j@~vFc`AtvGqn@bqCqPrvArVhcJrSjw@j[zd@r_@xjCsEd|C~\\v}Axi@bhDjWvl@b~@toBlD~i@~BrrBzOrk@vo@nkApGviAcNxqBoj@jyBu|ApqDaZtaEkEjmAjF~rCud@jkF{G~nAwUtpB}c@`vB_h@xuAwHfmAaj@zaCqKfxAmOn|Add@taBpN`cAxPfl@`c@nuC|OrzArIjyAbp@dcC`^bhBzAlaBxI~jAyEd|AdAfw@eI`cDkTfoAuGv`@qm@reDwsA|mBwdBhiAg]nr@w`BhkB_k@xqAk_@|vBqXb~Co_@|w@mVtcA'

const polyline2 = 'q_r`KkhjxAeC`DeNjAkTrBiXrCyCwMgKqDiGeJa\\kNaNs@}GtEe_@`Qe~@~f@qYp@wJpa@m[ne@ah@h}@wRvXmy@f}@uW`g@sPpj@kIdc@uSl_BuMbo@gIfYkQ~c@_X`c@oE~Es\\jYmK|KiMlRcqAlgC}`@zl@g|@b~@gDbFmOz[cKdb@yAxKyLh_AmMdq@yPsKuQzVcBvIsWbf@oDt@_InDeO~FsQ|E}R`IpOtj@~FdIxTdShGbOsE|n@Zv_@tGlaAfFzwA~B~cAsCp~BrBlkDdBvxCzBre@`CzW_FjHkXjl@iUdXoOri@kQjX{e@lfAePhW}Ap`@sE~LrLxa@xE`HxLbTpXvh@vF`Z~Ctr@|Plh@xFvh@xF`V~Zhu@|X~b@dDaBzF|a@jKpb@tCvTpFfc@xI~v@|Fxj@tAzT~DjbBJ~c@{EtzCoE`i@wJxp@iHrk@s@jOqFbt@eGjj@}Kxt@iInb@\\`JgCxv@{Lr{@}FzY{I|ZqKnb@oKhk@aMvZuB`zA`Frh@rNh`@bVr`@rFfVnMp{@vNzq@dJ`\\hKlZrKxV|d@hx@rQvf@pVbcA~Gpk@fAdd@i@pr@tFpAl@ViElr@|@hv@y@vH_AhWnEjyCf@xOpAdj@mL~LiMbL_Dhy@wJd}AmLfiDq@~iCcDb_CoDt`ACdg@p@fSxIzuAx@bWpAn`ArOv^`FhSpCxGsBtZuDtf@uCjZP|M}B`GmD~k@uCpCnAlNdCr[zE~mBs@nTgMltA{VvrA}AjMiRl~BqEjz@kRbaBwFlVkQ`a@eYn_A}Q|e@uLdi@cBrw@cDjUkPxw@qEjl@}Bzn@eJv]iDLwHve@mA|PjJfh@fUvw@bKx^`Jxx@`Kvi@hAfLtJht@`In^rG~YpExZvGfl@xAtYzSroBxAfFbO`u@pI`g@tH`TlHx[tNln@nBnWdAnr@_@`_Ag@f{Ak@nWaC~eAoBhb@uCbcAuBna@kIzu@cLp}@qHv]_v@xrBwS|b@w[bj@iR~a@mEnRqKzd@sRtYwl@l`@gXt[_@I_s@zlAoOlR__@pa@}Rt\\aLbk@{P`_AiH`g@_G`u@sCpn@_Gnw@eLvu@mNxZmPlUr@rVkS|v@{BpA'

let MARKERS;

//----------------------------------------------------------------------------
class Map extends Component {

  constructor(props) {
    super(props)

    this.state = {
      mapsLoaded: false,
      map: null,
      maps: null,
    }
  }

  //--------------------------------------------------------------------------
  onMapLoaded = (map, maps) => {
    this.fitBounds(map, maps)

    this.setState({
      ...this.state,
      mapsLoaded: true,
      map: map,
      maps: maps
    })
  }

  //--------------------------------------------------------------------------
  fitBounds = (map, maps) => {
    var bounds = new maps.LatLngBounds()
    for (let marker of MARKERS) {
      bounds.extend(
        new maps.LatLng(marker.lat, marker.lng)
      )
    }
    map.fitBounds(bounds)
  }

  //--------------------------------------------------------------------------
  // This function generates vibrant, "evenly spaced" colours (i.e. no clustering). 
  // This is ideal for creating easily distinguishable vibrant markers in Google Maps and other apps.
  rainbowStop(h) {
    let f = (n, k = (n + h * 12) % 12) => .5 - .5 * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    let rgb2hex = (r, g, b) => "#" + [r, g, b].map(x => Math.round(x * 255).toString(16).padStart(2, 0)).join('');
    return (rgb2hex(f(0), f(8), f(4)));
  }

  //--------------------------------------------------------------------------
  // Render non geodesic polyline (straight line) */
  renderPolylines = (map, maps) => {

    let nonGeodesicPolyline = new maps.Polyline({
      path: MARKERS,
      geodesic: false,
      strokeColor: '#00a1e1',
      strokeOpacity: 0.7,
      strokeWeight: 3
    })
    nonGeodesicPolyline.setMap(map)
  }

  //--------------------------------------------------------------------------
  parseInputDataForMap = (searchResponse, routeDetailsArrIdx, routeSegmentArrIdx) => {
    const mapData = {
      parsed: false,
      markerData: [],
      depData: { text: null, lat: null, lng: null },
      destData: { text: null, lat: null, lng: null }
    };

    if (searchResponse && Array.isArray(searchResponse.routes) && searchResponse.routes.length > 0
      && Array.isArray(searchResponse.places) && searchResponse.places.length > 0) {

      // Get the main departure and arrival cities and store the coordinates and names for text markers
      const depPlaceIdx = searchResponse.routes[0].depPlace;
      const arrPlaceIdx = searchResponse.routes[0].arrPlace;

      const depLat = searchResponse.places[depPlaceIdx].lat;
      const depLng = searchResponse.places[depPlaceIdx].lng;
      const depName = searchResponse.places[depPlaceIdx].shortName;

      const destLat = searchResponse.places[arrPlaceIdx].lat;
      const destLng = searchResponse.places[arrPlaceIdx].lng;
      const destName = searchResponse.places[arrPlaceIdx].shortName;

      mapData.depData.lat = depLat;
      mapData.depData.lng = depLng;
      mapData.depData.text = depName;

      mapData.destData.lat = destLat;
      mapData.destData.lng = destLng;
      mapData.destData.text = destName;
      // =================

      if (routeDetailsArrIdx >= 0 && routeSegmentArrIdx >= 0) {
        // Todo: Show single segment
      } else if (routeDetailsArrIdx >= 0) {
        // Todo: Show complete route (all segements)
      } else {
        // Overview, show just departing and arriving locations
        mapData.markerData = [{ lat: depLat, lng: depLng }, { lat: destLat, lng: destLng }];
      }

      mapData.parsed = true;
    }

    return mapData;
  }

  //--------------------------------------------------------------------------
  render() {

    const { searchResponse, routeDetailsArrIdx, routeSegmentArrIdx } = this.props;
    const { parsed, markerData, depData, destData } = this.parseInputDataForMap(searchResponse, routeDetailsArrIdx, routeSegmentArrIdx);

    if (!parsed) {
      return (null)
    }

    MARKERS = markerData;

    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMap
          bootstrapURLKeys={{ key: googleMapsKey }}
          yesIWantToUseGoogleMapApiInternals={true}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          onGoogleApiLoaded={({ map, maps }) => this.onMapLoaded(map, maps)}>
          <Marker text={depData.text} lat={depData.lat} lng={depData.lng} />
          <Marker text={destData.text} lat={destData.lat} lng={destData.lng} />
          {this.state.mapsLoaded ? this.renderPolylines(this.state.map, this.state.maps) : ''}
        </GoogleMap>
      </div>
    )
  }
}

//----------------------------------------------------------------------------
Map.defaultProps = {
  //markers: decodePolyline(polyline),
  //markers: [

  //{ lat: 43.681583, lng: -79.61146 }, //Toronto
  //{ lat: 53.42728, lng: -6.24357 }, // Dublin
  //{ lat: 59.33258, lng: 18.0649 }, // Stockholm
  // { lat: 53.42728, lng: -6.24357 }, // Dublin
  //{ lat: 43.681583, lng: -79.61146 } //Toronto
  //],
  center: [59.33258, 18.0649],
  zoom: 4
}

//----------------------------------------------------------------------------
export default Map;

// Stockholm
// "lat": 59.33258,
// "lng": 18.0649,

// Åre
// "lat": 63.40109,
// "lng": 13.08222,

// Falun
// "lat": 60.60357,
// "lng": 15.62597,