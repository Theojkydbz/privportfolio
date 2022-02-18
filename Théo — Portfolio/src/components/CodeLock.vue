<template>
    <div id="verificator" class="code">
        <form >
            <input type="password" maxlength="1" />
            <input type="password" maxlength="1" />
            <input type="password" maxlength="1" />
            <input type="password" maxlength="1" />
        </form>
    </div>
</template>

<script>
export default {
  name: 'CodeLock',
  mounted(){
    const inputs = document.querySelectorAll('input');
    const verificator = document.getElementById('verificator');
    const code = document.getElementById('code');
    const form = document.querySelector('form');
        inputs.forEach((input, key) => {
        if (key !== 0) {
            input.addEventListener("click", function () {
            inputs[0].focus();
            });
        }
        input.addEventListener("keyup", function () {
            if (input.value) {
            if (key === 3) {
                // Last one tadaa
                const userCode = [...inputs].map((input) => input.value).join("");
                verificator.classList.add("error");
                form.reset();
                inputs[0].focus();
                setTimeout(function() {
                    verificator.classList.remove("error");
                }, 700);
            } else {
                inputs[key + 1].focus();
            }
            }
        });
        });

  }
  
}
</script>

<style scoped>
img{
    padding: 5px;
}

form{
  display: flex;
  justify-content: center;
}
input {
  margin: 0 0.5rem;
  padding: 0.5rem;
  border: none;
  width: 50px;
  height: 50px;
  text-align: center;
  font-size: 3rem;
  background: #E3E3DC;
  border-radius: 14px;
}
@keyframes error{
   0% { background: #fa9898; transform: translate(3px, 0px) }
  10% { transform: translate(-3px, 0px) }
  20% { transform: translate(2px, 0px)  }
  30% { transform: translate(-2px, 0px)  }
  40% { background: #fa9898; transform: translate(3px, 0px)  }
  50% { transform: translate(-3px, 0px)  }
  60% { transform: translate(2px, 0px)  }
  70% { transform: translate(-2px, 0px)  }
  80% { transform: translate(1px, 0px)  }
  90% { transform: translate(-1px, 0px)  }
  100% { background: #E3E3DC; transform: translate(1px, 0px)  }
}
.error input{
    animation-name: error;
    animation-duration: 0.7s;
    animation-timing-function: ease-in-out;
}

input:focus-visible{
    border: none;
}


</style>