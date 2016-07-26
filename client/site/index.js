Template.siteIndex.onCreated(function() {
  Session.set('Contribute', [])
  Session.set('Donate', [])
  Session.set('Report', [])
  Session.set('Founding', [])
});
Template.siteIndex.helpers({
  contributes: function(argument) {
    Session.set('Contribute', Contribute.find().fetch())
    return Contribute.find().fetch();
  },
  donates: function(argument) {
    Session.set('Donate', Donate.find().fetch())
    return Donate.find().fetch()
  },
  reports: function(argument) {
    Session.set('Report', Report.find().fetch())
    return Report.find().fetch()
  },
  foundings: function() {
    Session.set('Founding', Founding.find().fetch())
    return Founding.find().fetch()
  }
});
Template.siteIndex.events({
  // 'click .menu .item': function(e, t) {
  // 	$(e.currentTarget).tab();
  //   // $('.menu .item')
  //   //   .tab()
  // }
});
Template.siteIndex.onRendered(function() {
  $('.menu .item')
    .tab()
  if ($("allmap")) {
    map = new AMap.Map('allmap', {
      resizeEnable: true
    });
    var southWest = new AMap.LngLat(74.377087, 52.136433);
    var northEast = new AMap.LngLat(128.517712, 24.171179);
    var bounds = new AMap.Bounds(southWest, northEast);
    map.setBounds(bounds);
    var geocoder = new AMap.Geocoder({
      city: "0", //城市，默认：“全国”
      radius: 1000 //范围，默认：500
    });
    //地理编码,返回地理编码结果

    var Foundings = Session.get('Founding');
    var Reports = Session.get('Report');
    var Donates = Session.get('Donate');
    var Contributes = Session.get('Contribute');

    Foundings.forEach(function(item) {
      geocoder.getLocation(item.address, function(status, result) {
        if (status === 'complete' && result.info === 'OK') {
          geocoder_CallBack(result);
        }
      });
    })
    Reports.forEach(function(item) {
      console.log(item)
      geocoder.getLocation(item.address, function(status, result) {
        if (status === 'complete' && result.info === 'OK') {
          geocoder_CallBack(result);
        }
      });
    })
    Donates.forEach(function(item) {
      console.log(item)
      geocoder.getLocation(item.address, function(status, result) {
        if (status === 'complete' && result.info === 'OK') {
          geocoder_CallBack(result);
        }
      });
    })
    Contributes.forEach(function(item) {
      console.log(item)
      geocoder.getLocation(item.address, function(status, result) {
        if (status === 'complete' && result.info === 'OK') {
          geocoder_CallBack(result);
        }
      });
    })
    // geocoder.getLocation("山西大同", function(status, result) {
    //   if (status === 'complete' && result.info === 'OK') {
    //     geocoder_CallBack(result);
    //   }
    // });

    var toolBar = new AMap.ToolBar({
      visible: true
    });
    map.addControl(toolBar);

    function geocoder_CallBack(data) {
      var resultStr = "";
      //地理编码结果数组
      var geocode = data.geocodes;
      for (var i = 0; i < geocode.length; i++) {
        //拼接输出html
        resultStr += "<span style=\"font-size: 12px;padding:0px 0 4px 2px; border-bottom:1px solid #C1FFC1;\">" + "<b>地址</b>：" + geocode[i].formattedAddress + "" + "&nbsp;&nbsp;<b>的地理编码结果是:</b><b>&nbsp;&nbsp;&nbsp;&nbsp;坐标</b>：" + geocode[i].location.getLng() + ", " + geocode[i].location.getLat() + "" + "<b>&nbsp;&nbsp;&nbsp;&nbsp;匹配级别</b>：" + geocode[i].level + "</span>";
        addMarker(i, geocode[i]);
      }
      // map.setFitView();
      // document.getElementById("result").innerHTML = resultStr;
    }

    function addMarker(i, d) {
      var marker = new AMap.Marker({
        map: map,
        position: [d.location.getLng(), d.location.getLat()]
      });
      var infoWindow = new AMap.InfoWindow({
        content: d.formattedAddress,
        offset: { x: 0, y: -30 }
      });
      marker.on("mouseover", function(e) {
        infoWindow.open(map, marker.getPosition());
      });
    }











  }
})
