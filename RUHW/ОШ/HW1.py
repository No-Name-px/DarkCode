print('start')
rub50 = int(input())
rub100 = int(input())
rub200 = int(input())
sum = int(input())
back = rub50*50 + rub100*100 + rub200*200 - sum
rub10 = back // 10
rub5 = (back - rub10*10) // 5
rub1 = back - rub10 * 10 - rub5 * 5
print(rub1)
print(rub5)
print(rub10)