$(function () {
	$(".fa-fw").css("display", "none");
	//--------scanner-------
	let scanner = new Instascan.Scanner({
		video: document.getElementById('preview')
	});
	scanner.addListener('scan', function (content) {
		$(".table").addClass("distable");
		$(".fa-fw").css("display", "initial");
		$("#r_id").text(content);
		scan_rabi_id = content;

		loding = setTimeout(loader, 1000);

		function loader() {
			get_info(scan_rabi_id);
			$(".table").removeClass("distable");
			$(".fa-fw").css("display", "none");
		}


	});
	Instascan.Camera.getCameras().then(function (cameras) {
		$('.camera_list li').empty();
		if (cameras.length > 0) {
			cameras.forEach(function (c, i) {
				camera_name = c.name;
				camera_id = i;
				console.log(typeof (i));
				$('.camera_list').append('<li id=' + i + ' class="items"><i class="fa fa-camera fa-lg" aria-hidden="true"></i> 鏡頭 ' + (camera_id + 1) + ' </li>');
			});

			$(".camera_list li").click(function () {
				active = $(this).attr("id");
				scanner.start(cameras[active]);
				$(this).addClass("active").siblings().removeClass("active");
			});
			if (cameras.length >= 2) {
				scanner.start(cameras[1]);
				$(".camera_list li:nth(1)").addClass("active");
			} else {
				scanner.start(cameras[0]);
				$(".camera_list li:nth(0)").addClass("active");
			}
		} else {
			alert("找不到相機...請確認允許使用相機");
		}
	}).catch(function (e) {
		// console.error(e);
	});
	//--------scanner-end------
	function get_info(scan_rabi_id) {
		// console.log(scan_rabi_id);
		$.ajax({
			url: "./json/fake_info.json",
			type: "post",
			data: null,
			success: function (data) {
				info_data = data;

				// console.log("success");
				// console.log(regi_data);

				info_data.forEach(function (i_data) {
					rabies_id = i_data.rabies_id;
					if (scan_rabi_id == rabies_id) {
						// console.log(i_data);
						pet_name = i_data.pet_name;
						pet_id = i_data.pet_id;
						pet_kind = i_data.pet_kind;
						pet_variety = i_data.pet_variety;
						pet_color = i_data.pet_color;
						rabies_unit = i_data.rabies_unit;
						owner_name = i_data.owner_name;
						owner_phone = i_data.owner_phone;
						data_build = i_data.data_build;
						data_update = i_data.data_update;
						return;
					}

				});
			},
			error: function (data) {
				// console.log(data);
			},
			complete: function () {
				// console.log("con");
				$("#p_name").text(pet_name);
				$("#p_num").text(pet_id);
				$("#p_kind").text(pet_kind);
				$("#p_vari").text(pet_variety);
				$("#p_color").text(pet_color);
				$("#p_unit").text(rabies_unit);
				$("#p_owner").text(owner_name);
				$("#p_phone").text(owner_phone);
				$("#data_build").text(data_build);
				$("#data_update").text(data_update);
			}
		}); //--ajax-end
	}
});