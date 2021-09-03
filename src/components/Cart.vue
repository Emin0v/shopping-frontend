<template>
  <transition name="modal" v-if="show" >
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <table>
            <div class="modal-header">
              <thead class="table">
                <tr>
                  <th class="col">name</th>
                  <th class="col">Picture</th>
                  <th class="col">Price</th>
                  <th class="col">Count</th>
                  <th class="col">Color</th>
                  <th class="col">Size</th>
                  <th class="col"></th>
                </tr>
              </thead>
            </div>

            <div class="modal-body">
              <tbody>
                <tr v-for='item  in items' :key='item'>
                  
                  <td class="col">{{item.name}}</td>
                  <td class="col">asdasd</td>

                  <td class="col">asdasd</td>

                  <td class="col">asdasd</td>

                  <td class="col">asdasd</td>
                </tr>
              </tbody>
            </div>
          </table>

          <div class="modal-footer">
            <slot name="footer">
              <div > 
                <button  @click="$emit('showModal',false)" class=" btn btn-secondary">Close</button>

                <button class=" btn btn-info fa fa-shopping-cart">Buy</button>
              </div>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>

</template>

<script>
export default {

  props:{
    show:{
      type: Boolean,
      default: false
    },
    items:{
      type: String
    }
  },

  data() {
    return {
      //  showModal: true,
    };
  },


  

};
</script>

<style scoped>
#app {
  padding: 1rem;
}

.col {
  padding-left: 25px ;
  padding-right: 25px ;

}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 650px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  display: block;
  margin-top: 1rem;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>