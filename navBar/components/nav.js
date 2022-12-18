let navBar = function (){
return `  <div id="navbar">
<div id="topOfTheNav">
  <div id="saveBigWithApp">
    <img src="images/mobile.png" alt="" />
    <span>Save $50 with app</span>
    <img src="images/expandDown.png" alt="" />

    <!-- // drop down  -->
    <div id="saveBigWithAppDropDown">
      <span
        >Get exclusive app deals and discounts, download our app &
        SAVE</span
      >
      <div>
        <div>
          <img
            src="https://content1.geekbuying.com/V1.4/en/images/index_images/android_app.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://content1.geekbuying.com/V1.4/en/images/index_images/gallery.jpg"
            alt=""
          /><img
            src="https://content1.geekbuying.com/V1.4/en/images/index_images/app_store.jpg"
            alt=""
          /><img
            src="https://content1.geekbuying.com/V1.4/en/images/index_images/google_play.jpg"
            alt=""
          />
        </div>
      </div>
      <span>Go to mobile site</span>
    </div>
  </div>

  <div id="language">
    <span>Language</span>
    <img src="images\expandDown.png" alt="" />

    <!-- drop down language  -->
    <div id="langdropdown">
      <span>English</span>
      <span>Bengali</span>
      <span>Hindi</span>
      <span>Arbic</span>
      <span>Germany</span>
      <span>Hibru</span>
      <span>spaanish</span>
      <span>french</span>
      <span>Japanise</span>
      <span>Chineese</span>
      <span>spaanish</span>
      <span>french</span>
      <span>Japanise</span>
      <span>Chineese</span>
    </div>
  </div>
  <div id="supportCenter">
    <span>Support Center</span>
    <img src="images/expandDown.jpg" alt="" />

    <!-- drop down  -->
    <div id="supportDropDown">
      <div>
        <img src="images/chat.png" alt="" />
        <span>Live Chat</span>
      </div>
      <div>
        <img src="images/coupon.png" alt="" />
        <span>Ticket</span>
      </div>
      <div>
        <img
          src="images/question (1).png"
          alt=""
        /><span>Help Center</span>
      </div>
    </div>
  </div>
</div>

<div id="middleOfTheNav">
  <div id="middleOfTheNavIn">
    <div id="logoNav">
      <!-- // redirect index page  -->
      <img src="images/logo 4.png" alt="" />
    </div>

    <div id="searchBar">
      <!-- drop down  -->

      <div id="allCatNavDropDown">
        <span id="allCatTitleMiddle">All Catagories</span>
        <!-- catagories  -->
        <div id="allcatDropDownDown">
          <div id="allCatLeft">
            <span>All Catagories</span>
            <span class="allCatDropDownOptions" id="smartHomeandgarden"
              >Smart Home & Garden</span
            >
            <span class="allCatDropDownOptions" id="phoneAndAccessories"
              >Phones & Accessories</span
            >
            <span
              class="allCatDropDownOptions"
              id="computerTabletsAccessories"
              >Computers, Tablets & Accessories</span
            >
            <span class="allCatDropDownOptions" id="wearableDevices"
              >Wearable Devices</span
            >
            <span
              class="allCatDropDownOptions"
              id="automobilesAndMotorcycle"
              >Automobiles & Motorcycles</span
            >
          </div>
          <div id="allCatRight">
            <span class="allCatDropDownOptions" id="sportsAndOutdoor"
              >Sports & Outdoors</span
            >
            <span class="allCatDropDownOptions" id="consumerElectronics"
              >Consumer Electronics</span
            >
            <span class="allCatDropDownOptions" id="tvBoxesAndMiniPc"
              >TV Boxes & Mini PCs</span
            >
            <span class="allCatDropDownOptions" id="toysAndHobbies"
              >Toys & Hobbies</span
            >
            <span class="allCatDropDownOptions" id="securitySystems"
              >Security Systems</span
            >
            <span class="allCatDropDownOptions" id="fashion"
              >Fashion</span
            >
          </div>
        </div>
        <img src="images/down-arrow.png" alt="" />
      </div>

      <span class="br">|</span>
      <input
        type="search"
        id="searchNav"
        placeholder="Search by keywords"
      />
      <img src="images/searchB.png" alt="" />
    </div>

    <div id="signbarNav">
      <div id="shipToNab">
        <div id="shipToNavdown">Ship
          <!-- // flag image here on nav display  -->
          <img src="https://flagcdn.com/h40/in.png" alt="India" id="shipToNavImg" />

          <span>/</span>INR

          <!-- nav display currency code  -->
          <span id="shipToNavCurrency"></span>
          <img src="images/up-arrow white.png" alt=""/>

          <!-- / drop down  -->
          <div id="currencyDropDown">
            <h3>Select Regional Settings</h3>
            <span>Ship to</span>

            <div id="shipToNavOptionMain">
              <!-- show in the inside dropdown  -->
              <div id="shipToUpdateText">
                <img src="https://flagcdn.com/h40/in.png" alt="" id="countryShipTo" />
                <span id="shipTOCountry"></span>
              </div>
              <img
                src="images/expandDownBlack.png"
                alt=""
              />

              <!-- // js here  -->
              <div id="shipToDropDown"></div>
            </div>

            <span>Currency</span>
            <div id="currencyToNavMain">
              <div id="currencyNavIn">
                <span id="currencyNavInSymbolSpan">INR</span>
                <span id="currencyNavInCodeSpan"></span>
              </div>
              <img
                src="images/expandDownBlack.png"
                alt=""
              />

              <!-- // js here  -->
              <div id="currencyNavDropIn">
                <div id="currencyNavleftIn"></div>
                <hr />
                <div id="currencyNavRightIn"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="signInUpNav">
        <img src="images/userP.png" alt="" />
        <span>Sign in</span>

        <!-- drop down  -->
        <div id="signInDropDownNav">
          <span>Welcome to Geekbuying</span>
          <span id="signUpRed">
            <a href="signup.html"> Join </a> </span
          ><span id="signInRed">
            <a href="signIn.html"> Sign In </a>
          </span>
        </div>
      </div>
      <div id="AddToCartOnNav">
        <a href="cartNav.html"><img src="images/cart.png" alt="" /></a>
        <span id="cartCount">0</span>
        <div id="indivCartNav"></div>
      </div>
      <!-- // wishlist  -->

      <!-- <div id="addToFavouriteNav"> -->
      <!-- <img src="./variable/allProduct/images/list.png" alt="" /> -->
      <!-- <span id="wishlistCountNav">0</span> -->

      <!-- drop down  -->
      <!-- <div id="wishlistDropDownNav"></div> -->
      <!-- </div> -->
    </div>
  </div>
</div>
<div id="tailOfTheNav">
  <!-- <div id="tailOfNavIn"></div> -->
  <div id="catagoriesNavTailDiv">
    <img src="images/menu.png" alt="" />
    <h3>Catagories</h3>

    <!-- // big drop down  -->
    <div id="catagoriesNavTailDropDown">
      <!-- // hover over  -->
      <div id="localwarehouseNav">
        <span>Local Warehouses</span>
        <!-- side hide menu  -->
        <div id="localwarehouseOptions" class="parentside">
          <div class="child1">
            <div>
              <h4>EU Warehouse</h4>
              <span>EU Deals</span>
            </div>
            <div>
              <h4>DE Warehouse</h4>
              <span>DE Deals</span>
            </div>
            <div>
              <h4>PL Warehouse</h4>
              <span>PL Deals</span>
            </div>
            <div>
              <h4>ES Warehouse</h4>
              <span>ES Deals</span>
            </div>
            <div>
              <h4>IT Warehouse</h4>
              <span>IT Deals</span>
            </div>
            <div>
              <h4>CZ Warehouse</h4>
              <span></span>
            </div>
            <div>
              <h4>EU-3 Warehouse</h4>
              <span></span>
            </div>
            <div>
              <h4>UK Warehouse</h4>
              <span>UK Deals</span>
            </div>
          </div>

          <div class="child2">
            <div>
              <h4>USA Warehouse</h4>
              <span>USA Details</span>
            </div>
          </div>
          <div class="child3">
            <div id="localWarehouseCHildImage">
              <img
                src="images/category-1301-6ETJOmbg.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div id="sportsHoverNav">
        <span>Sports & Outdoors</span>
        <div class="parentside" id="sportsHoverInsideNav">
          <div class="child1">
            <h4>E-Bikes, Scooters & Wheels</h4>
            <span>Bikes</span>
            <span>Electric Scooters</span>
            <span>Electric Skateboards</span>
            <span>Asscessories</span>

            <h4>Exercise</h4>
            <span>Fitness & Body Building</span>
            <span>Water Sports</span>
            <span>Yoga & Pilates</span>
            <span>Weightlifting</span>
            <span>Cardio</span>
            <span>Indoor Games</span>

            <h4>Cycling</h4>
            <span>Bike Computers</span>
            <span>Bike Bags</span>
            <span>Bike Tools</span>
            <span>Bike Lights</span>
            <span>Cycling Apparels</span>
            <span>Other Accessories</span>
          </div>
          <div class="child2">
            <h4>Camping & Hiking</h4>
            <span>Luggage & Bags</span>
            <span>Tent & Hammock</span>
            <span>Travel Supplies</span>
            <span>Knives & Multi Tools</span>

            <h4>Outdoor Generators</h4>
            <h4>Flashlight & Torch</h4>
            <h4>Outdoor Sports Cameras</h4>
            <h4>Hunting & Shooting</h4>
            <h4>Outdoor Recreation</h4>
            <h4>Outdoor Apparels</h4>
            <h4>Athletics</h4>
          </div>

          <div class="child3">
            <div id="sportsNavImg">
              <img
                src="images/category-1241-6g70jAZ2.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div id="smartHomeandgardenNavParent">
        <span>Smart Home & Garden</span>
        <div id="smartHomeGardenchildNav" class="parentside">
          <div class="child1">
            <h4>Smart Home</h4>
            <span>Robot Vacuum Cleaners</span>
            <span>Cordless Vacuum Cleaners</span>
            <span>Fitness</span>
            <span>Smart Sockets & Switches</span>
            <span>Smart Lights</span>
            <span>Xiaomi Smart Gadgets</span>
            <span>Air Purifier</span>
            <span>Others</span>

            <h4>Kitchen & Dining</h4>
            <span>Kitchen Appliances</span>
            <span>Cookware</span>
            <span>Bakeware</span>
            <span>Tableware</span>
            <span>Barware</span>
            <span>Kitchen Tools & Gadgets</span>
            <span>Others</span>

            <h4>Household Appliances</h4>
          </div>

          <div class="child2">
            <h4>Furniture</h4>
            <span>Outdoor Furniture</span>
            <span>Tables</span>
            <span>Chairs</span>
            <span>Beds & Asscessories</span>
            <span>Cabinets & Storage</span>
            <span>Shelving</span>
            <span>Entertainment Centers & TV Stands</span>
            <span>Furniture Sets</span>

            <h4>Patio, Lawn & Garden</h4>
            <span>Pots & Planters</span>
            <span>Watering & Irrigation</span>
            <span>Mowers & Outdoor Power Tools</span>
            <span>Other Garden Supplies</span>

            <h4>Health & Beauty</h4>
            <span>Personal Care</span>
            <span>Health Care</span>
            <span>Massage & Relaxation</span>
          </div>

          <div class="child3">
            <h4>Home Decors</h4>
            <span>Rugs</span>
            <span>Door Mats</span>
            <span>Window Treatments</span>
            <span>Mirrors</span>
            <span>Artificial Flora</span>

            <h4>Household Supplies</h4>
            <span>Storage & Organization</span>
            <span>Household Cleaning Supplies</span>

            <h4>Lighting</h4>
            <h4>Tools & Home Improvement</h4>
            <h4>Office Supplies</h4>
            <h4>Pet Supplies</h4>
            <h4>Bathroom Supplies</h4>
          </div>
        </div>
      </div>
      <div id="consumerElectronicsNavSlide">
        <span>Consumer Electronics</span>
        <div id="consumersElectronicsInNav" class="parentside">
          <div class="child1">
            <h4>3D Printers & Accessories</h4>
            <span>FDM 3D Printers</span>
            <span>SLA 3D Printers</span>
            <span>3D Printer Accessories</span>

            <h4>Laser Engravers & Cutters</h4>
            <span>Desktop Laser Engravers</span>

            <h4>Bluetooth Speakers</h4>
            <span>Wireless & Bluetooth Speakers</span>
            <span>Outdoor Speakers</span>
            <span>Accessories</span>

            <h4>Laser Engravers & Cutters</h4>
            <h4>Headphones & Earphones</h4>
            <span>Earbud Headphones</span>
            <span>On-ear & Over-ear Headphones</span>
            <span>Sports & Fitness Headphones</span>
            <span>Headphone Accessories</span>

            <h4>Projectors</h4>
          </div>

          <div class="child2">
            <h4>Video Games Accessories</h4>
            <span>Handheld Game Consoles</span>
            <span>PC Gaming Controllers</span>
            <span>Retro Gaming</span>
            <span>PlayStation</span>
            <span>Nintendo</span>
            <span>Other Game Accessories</span>

            <h4>Professional Instruments & Tools</h4>
            <span>Measurements & Analysis Instruments</span>
            <span>Maintenance & Repair Tools</span>

            <h4>Memory Card</h4>
            <h4>Cameras & Optics</h4>
            <h4>Power Banks & Chargers</h4>
            <h4>Audio & Video Accessories</h4>
          </div>

          <div class="child3">
            <div id="consumersImgNavIn">
              <img
                src="images/consumerElectronics.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div id="tvBoxMiniPcNavInSlide">
        <span>TV Boxes & Mini PCs</span>
        <div id="tvboxMiniPcNavIn" class="parentside">
          <div class="child1">
            <h4>Windows Mini PCs</h4>
            <h4>Android TV Boxes</h4>
            <h4>Android TV Sticks</h4>
            <h4>Barebone Mini PC</h4>
            <h4>MINI PC Accessories & Gadgets</h4>
            <h4>Bundle & Discount Zone</h4>
          </div>
          <div class="child3">
            <div id="tcBoxMiniPcNavImg">
              <img
                src="images/tvMiniBox.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div id="computerTabletnavSlideIn">
        <span>Computers, Tablets & Accessories</span>
        <div id="computerTabletNavSlideParent" class="parentside">
          <div class="child1">
            <h4>Laptops</h4>
            <span>Ultrabooks</span>
            <span>Gaming Laptops</span>
            <h4>Tablets</h4>
            <span>Android Tablets</span>
            <span>Windows Tablets</span>
            <h4>Laptop Accessories</h4>
            <h4>Computer Components</h4>
            <span>DIY PC</span>
            <span>SSD & HDD Enclosures</span>
            <span>PC Power Supplies</span>
            <span>Fan & Cooling</span>
            <span>Monitors</span>
            <h4>Graphic Tablets</h4>
            <h4>USB Gadgets</h4>
          </div>
          <div class="child2">
            <h4>Keyboard & Mouse</h4>
            <span>Wireless Keyboards</span>
            <span>Wired Keyboards</span>
            <span>Wireless Mouse</span>
            <span>Wired Mouse</span>
            <span>Keyboard and Mice Kit</span>
            <h4>Tronsmart Chargers</h4>
            <span>Tronsmart Wall Chargers</span>
            <span>Tronsmart Cables</span>
            <h4>Networking</h4>
            <h4>Other Accessories</h4>
            <span>Webcams</span>
            <span>Adapters</span>
            <span>Cables</span>
          </div>

          <div class="child3">
            <div id="computertabletnavImageIn">
              <img
                src="images/computerTablet.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div id="toysHobbiesNavInSlide">
        <span>Toys & Hobbies</span>
        <div id="toysHobbiesNavInParentSlide" class="parentside">
          <div class="child1">
            <h4>RC Drones</h4>
            <span>RC Quadcopters</span>
            <span>FPV Racing Drone</span>
            <span>RC Airplanes</span>
            <span>RC Helicopters</span>
            <h4>RC Vehicles</h4>
            <span>RC Cars</span>
            <span>RC Boats</span>
            <h4>FPV System</h4>
            <h4>RC Parts</h4>
            <span>RC Boat Parts</span>
            <span>RC Car Parts</span>
            <span>RC Quadcopter Parts</span>
            <span>Multi Rotor Parts</span>
            <h4>RC Robot</h4>
            <h4>Building Sets & Blocks</h4>
          </div>
          <div class="child2">
            <h4>Musical Instruments & Hobbies</h4>
            <span>Strings</span>
            <span>Drums & Percussion</span>
            <span>Other Musical Instruments</span>
            <span>Other Hobbies</span>
            <h4>Outdoor Play Equipment</h4>
            <span>Swing Sets & Playsets</span>
            <span>Trampolines</span>
            <span>Kids' Playhouses</span>
            <h4>Toys</h4>
            <span>Dolls, Playsets & Toy Figures</span>
            <span>Puzzle Toys</span>
            <span>Holidays & Party</span>
          </div>
          <div class="child3">
            <div id="toysHobbiesnavImage">
              <img
                src="images/toysHobbies.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div id="phoneAccessoriesNavSlide">
        <span>Phones & Accessories</span>
        <div id="phoneAccessoriesNavParent" class="parentside">
          <div class="child1">
            <h4>Cell Phones</h4>
            <span>5G Smartphones</span>
            <span>4G Smartphones</span>
            <h4>Phone Accessories</h4>
            <span>Screen Protectors</span>
            <span>Cases & Covers</span>
            <h4>Apple Accessories</h4>
          </div>
          <div class="child3">
            <div id="phoneAccesorriesNavImage">
              <img
                src="images/phoneAccesorries.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div id="autoMobileNavSlide">
        <span>Automobiles & Motorcycles</span>
        <div id="automibileNavParentIn" class="parentside">
          <div class="child1">
            <h4>Car DVRs</h4>
            <h4>Car Alarm & Security</h4>
            <h4>Car Lights</h4>
            <span>Car LED Blubs</span>
            <span>HID Xerion Lights</span>
            <h4>Car Chargers</h4>
            <h4>Car Decorations</h4>
            <h4>Car Repair & Maintenance</h4>
            <h4>Car Parts & Gadgets</h4>
          </div>
          <div class="child3">
            <div id="automobilePartImage">
              <img
                src="images/automobilePart.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div id="wearableDevicenavSlide">
        <span>Wearable Devices</span>
        <div id="wearableDeviceNaveParentSlide" class="parentside">
          <div class="child1">
            <h4>Smart Watches</h4>
            <h4>Smart Bracelets</h4>
            <h4>Wearables Accessories</h4>
          </div>
          <div class="child3">
            <div id="wearableDeviceNavImage">
              <img
                src="images/wearablesDevice.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div id="securityCheckNavSlide">
        <span>Security Systems</span>
        <div id="securityCheckNavParentIn" class="parentside">
          <div class="child1">
            <h4>Security Cameras</h4>
            <span>IP Cameras</span>
            <h4>Surveillance DVR Systems</h4>
            <span>NVR Kits</span>
            <h4>Access Control Systems</h4>
            <span>Access Controller & Key</span>
            <span>Video Door Phones</span>
            <h4>Security System Accessories</h4>
          </div>
          <div class="child3">
            <div id="securityCheckNavImage">
              <img
                src="images/securitySystem.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div id="fashionNavSlide">
        <span>Fashion</span>
        <div id="fashionNavParentIn" class="parentside">
          <div class="child1">
            <h4>Watches</h4>
            <span>Pocket Watches</span>
            <span>Women's Watches</span>
            <h4>Jewelry</h4>
            <span>Rings</span>
            <span>Earrings</span>
            <span>Necklaces & Pendants</span>
            <span>Others</span>
            <h4>Clothing</h4>
            <span>Uniforms</span>
            <span>Suits</span>
            <span>Shirts & Tops</span>
            <span>Others</span>
            <h4>Bags & Shoes</h4>
            <span>Shoes</span>
            <span>Handbags, Wallets & cases</span>
          </div>
          <div class="child3">
            <div id="fashionNavImage">
              <img
                src="images/fashionImage.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <h3><a href="./variable/allProduct/allProduct.html">New</a></h3>
  <h3><a href="./variable/allProduct/allProduct.html">Bestselling</a></h3>
  <h3><a href="">Brand</a></h3>
  <h3><a href="">Clearance</a></h3>
  <h3><a href="">Deals</a></h3>
  <h3><a href="">Coupon</a></h3>
  <h3><a href="./footer/product.html">App Only</a></h3>
</div>
</div>`
}
export {navBar}