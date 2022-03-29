<template>
  <div class="HomeIndex">
    <div class="header">
      <h3>概括</h3>
      <div class="demo">
        <div class="el-row" style="margin-left: -10px; margin-right: -10px">
          <div
            class="el-col el-col-6"
            style="padding-left: 10px; padding-right: 10px"
          >
            <div class="grid-content">
              <div style="padding: 10px; background: rgb(103, 58, 183)">
                <i class="el-icon-location-outline index-icon"></i>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dignissimos earum enim fugiat illum iusto minus modi nam natus
                nisi sequi!
              </div>
            </div>
          </div>
          <div
            class="el-col el-col-6"
            style="padding-left: 10px; padding-right: 10px"
          >
            <div class="grid-content">
              <div style="padding: 10px; background: rgb(60, 141, 188)">
                <i class="el-icon-picture index-icon"></i> Lorem ipsum dolor sit
                amet, consectetur adipisicing elit. Dignissimos earum enim
                fugiat illum iusto minus modi nam natus nisi sequi!
              </div>
            </div>
          </div>
          <div
            class="el-col el-col-6"
            style="padding-left: 10px; padding-right: 10px"
          >
            <div class="grid-content">
              <div style="padding: 10px; background: rgb(0, 150, 136)">
                <i class="el-icon-service index-icon"></i> Lorem ipsum dolor sit
                amet, consectetur adipisicing elit. Dignissimos earum enim
                fugiat illum iusto minus modi nam natus nisi sequi!
              </div>
            </div>
          </div>
          <div
            class="el-col el-col-6"
            style="padding-left: 10px; padding-right: 10px"
          >
            <div class="grid-content">
              <div style="padding: 10px; background: rgb(96, 125, 139)">
                <i class="el-icon-bell index-icon"></i> Lorem ipsum dolor sit
                amet, consectetur adipisicing elit. Dignissimos earum enim
                fugiat illum iusto minus modi nam natus nisi sequi!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="booter">
      <div class="el-card">
        <div>
          <div class="el-row">
            <div>
              <div class="el-cascader">
                <div>
                  <div></div>
                </div>
              </div>
              <div
                class="
                  el-date-editor el-input el-input--prefix el-input--suffix
                  el-date-editor--date
                "
              >
                <!----><input
                  type="text"
                  autocomplete="off"
                  name=""
                  placeholder="选择日期"
                  class="el-input__inner"
                /><span class="el-input__prefix"
                  ><i class="el-input__icon el-icon-date"></i
                  ><!----></span
                ><span class="el-input__suffix"
                  ><span class="el-input__suffix-inner"
                    ><i class="el-input__icon"></i></span
                ></span>
              </div>
              <div class="el-input-number">
                <span
                  role="button"
                  class="el-input-number__decrease is-disabled"
                  ><i class="el-icon-minus"></i></span
                ><span role="button" class="el-input-number__increase"
                  ><i class="el-icon-plus"></i
                ></span>
                <div class="el-input">
                  <!----><input
                    type="text"
                    autocomplete="off"
                    aria-label="计数器max=10,min=1"
                    max="10"
                    min="1"
                    class="el-input__inner"
                    role="spinbutton"
                    aria-valuemax="10"
                    aria-valuemin="1"
                    aria-valuenow="1"
                    aria-disabled="undefined"
                  />
                </div>
              </div>
              <div style="display: inline-block">
                <div
                  role="slider"
                  aria-valuenow="2"
                  aria-valuetext="2"
                  aria-valuemin="0"
                  aria-valuemax="5"
                  tabindex="0"
                  class="el-rate"
                >
                  <span class="el-rate__item" style="cursor: pointer"
                    ><i
                      class="el-rate__icon el-icon-star-on"
                      style="color: rgb(153, 169, 191)"
                      ><!----></i
                    ></span
                  ><span class="el-rate__item" style="cursor: pointer"
                    ><i
                      class="el-rate__icon el-icon-star-on"
                      style="color: rgb(153, 169, 191)"
                      ><!----></i
                    ></span
                  ><span class="el-rate__item" style="cursor: pointer"
                    ><i
                      class="el-rate__icon el-icon-star-off"
                      style="color: rgb(198, 209, 222)"
                      ><!----></i
                    ></span
                  ><span class="el-rate__item" style="cursor: pointer"
                    ><i
                      class="el-rate__icon el-icon-star-off"
                      style="color: rgb(198, 209, 222)"
                      ><!----></i
                    ></span
                  ><span class="el-rate__item" style="cursor: pointer"
                    ><i
                      class="el-rate__icon el-icon-star-off"
                      style="color: rgb(198, 209, 222)"
                      ><!----></i
                    ></span
                  ><span class="el-rate__text" style="color: rgb(31, 45, 61)"
                    >2</span
                  >
                </div>
              </div>
              <div style="margin-left: 40px; display: inline-block">
                <label role="radio" tabindex="0" class="el-radio"
                  ><span class="el-radio__input"
                    ><span class="el-radio__inner"></span
                    ><input
                      type="radio"
                      aria-hidden="true"
                      tabindex="-1"
                      class="el-radio__original"
                      value="1" /></span
                  ><span class="el-radio__label">备选项<!----></span></label
                ><label role="radio" tabindex="0" class="el-radio"
                  ><span class="el-radio__input"
                    ><span class="el-radio__inner"></span
                    ><input
                      type="radio"
                      aria-hidden="true"
                      tabindex="-1"
                      class="el-radio__original"
                      value="2" /></span
                  ><span class="el-radio__label">备选项<!----></span></label
                >
              </div>
              <br /><br /><br />
              <div style="display: inline-block">
                <div class="el-steps el-steps--horizontal">
                  <div
                    class="el-step is-horizontal"
                    style="flex-basis: 50%; margin-right: 0px"
                  >
                    <div class="el-step__head is-finish">
                      <div class="el-step__line" style="margin-right: 0px">
                        <i
                          class="el-step__line-inner"
                          style="
                            transition-delay: 0ms;
                            border-width: 1px;
                            width: 100%;
                          "
                        ></i>
                      </div>
                      <div class="el-step__icon is-text">
                        <!---->
                        <div class="el-step__icon-inner">1</div>
                      </div>
                    </div>
                    <div class="el-step__main">
                      <div class="el-step__title is-finish">步骤 1</div>
                      <div class="el-step__description is-finish">
                        这是一段很长很长很长的描述性文字
                      </div>
                    </div>
                  </div>
                  <div
                    class="el-step is-horizontal"
                    style="flex-basis: 50%; margin-right: 0px"
                  >
                    <div class="el-step__head is-finish">
                      <div class="el-step__line" style="margin-right: 0px">
                        <i
                          class="el-step__line-inner"
                          style="
                            transition-delay: 150ms;
                            border-width: 0px;
                            width: 0%;
                          "
                        ></i>
                      </div>
                      <div class="el-step__icon is-text">
                        <!---->
                        <div class="el-step__icon-inner">2</div>
                      </div>
                    </div>
                    <div class="el-step__main">
                      <div class="el-step__title is-finish">步骤 2</div>
                      <div class="el-step__description is-finish">
                        这是一段很长很长很长的描述性文字
                      </div>
                    </div>
                  </div>
                  <div
                    class="el-step is-horizontal is-flex"
                    style="flex-basis: 50%; max-width: 33.3333%"
                  >
                    <div class="el-step__head is-process">
                      <div class="el-step__line">
                        <i class="el-step__line-inner"></i>
                      </div>
                      <div class="el-step__icon is-text">
                        <!---->
                        <div class="el-step__icon-inner">3</div>
                      </div>
                    </div>
                    <div class="el-step__main">
                      <div class="el-step__title is-process">步骤 3</div>
                      <div class="el-step__description is-process">
                        这段就没那么长了
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 777 -->
      <div>
        <div class="el-pagination is-background" style="display: inline-block">
          <button type="button" disabled="disabled" class="btn-prev">
            <i class="el-icon el-icon-arrow-left"></i>
          </button>
          <ul class="el-pager">
            <li class="number active">1</li>
            <!---->
            <li class="number">2</li>
            <li class="number">3</li>
            <li class="number">4</li>
            <li class="number">5</li>
            <li class="number">6</li>
            <li class="el-icon more btn-quicknext el-icon-more"></li>
            <li class="number">10</li>
          </ul>
          <button type="button" class="btn-next">
            <i class="el-icon el-icon-arrow-right"></i>
          </button>
        </div>
        <div role="group" aria-label="checkbox-group" class="el-checkbox-group">
          <label class="el-checkbox is-checked"
            ><span class="el-checkbox__input is-checked"
              ><span class="el-checkbox__inner"></span
              ><input
                type="checkbox"
                aria-hidden="false"
                class="el-checkbox__original"
                value="复选框 A" /></span
            ><span class="el-checkbox__label">复选框 A</span></label
          ><label class="el-checkbox"
            ><span class="el-checkbox__input"
              ><span class="el-checkbox__inner"></span
              ><input
                type="checkbox"
                aria-hidden="false"
                class="el-checkbox__original"
                value="复选框 B" /></span
            ><span class="el-checkbox__label">复选框 B</span></label
          ><label class="el-checkbox"
            ><span class="el-checkbox__input"
              ><span class="el-checkbox__inner"></span
              ><input
                type="checkbox"
                aria-hidden="false"
                class="el-checkbox__original"
                value="复选框 C" /></span
            ><span class="el-checkbox__label">复选框 C</span></label
          ><label class="el-checkbox is-disabled"
            ><span class="el-checkbox__input is-disabled"
              ><span class="el-checkbox__inner"></span
              ><input
                type="checkbox"
                aria-hidden="false"
                disabled="disabled"
                class="el-checkbox__original"
                value="禁用" /></span
            ><span class="el-checkbox__label">禁用</span></label
          ><label class="el-checkbox is-disabled is-checked"
            ><span class="el-checkbox__input is-disabled is-checked"
              ><span class="el-checkbox__inner"></span
              ><input
                type="checkbox"
                aria-hidden="false"
                disabled="disabled"
                class="el-checkbox__original"
                value="选中且禁用" /></span
            ><span class="el-checkbox__label">选中且禁用</span></label
          >
        </div>
        <button type="button" class="el-button el-button--default is-circle">
          <i class="el-icon-search"></i></button
        ><button type="button" class="el-button el-button--primary is-circle">
          <i class="el-icon-edit"></i></button
        ><button type="button" class="el-button el-button--success is-circle">
          <i class="el-icon-check"></i></button
        ><button type="button" class="el-button el-button--info is-circle">
          <i class="el-icon-message"></i></button
        ><button type="button" class="el-button el-button--warning is-circle">
          <i class="el-icon-star-off"></i></button
        ><button type="button" class="el-button el-button--danger is-circle">
          <i class="el-icon-delete"></i>
        </button>
      </div>
      <div style="margin-top: 40px">
        <button type="button" class="el-button el-button--default">
          <span>默认按钮</span></button
        ><button type="button" class="el-button el-button--primary">
          <span>主要按钮</span></button
        ><button type="button" class="el-button el-button--success">
          <span>成功按钮</span></button
        ><button type="button" class="el-button el-button--info">
          <span>信息按钮</span></button
        ><button type="button" class="el-button el-button--warning">
          <span>警告按钮</span></button
        ><button type="button" class="el-button el-button--danger">
          <span>危险按钮</span>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "HomeIndex",
};
</script>

<style scoped>
.header {
  background:#fff;
  margin: 4px 4px 4px;
}
.header h3 {
  line-height: 40px;
  padding-left: 20px;
  font-size: 20px;
  color: rgba(16, 16, 17, 0.267);
}
.grid-content i {
  font-size: 90px;
}
.grid-content div {
  font-size: 18px;
  line-height: 28px;
}
.booter {
    background: #fff;

}
.el-card {
    background: #fff;
}
</style>