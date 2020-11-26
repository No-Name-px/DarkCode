floors = int(input())
porch = int(input())
flats = int(input())
name_first = input()
flat_number_1 = int(input())
name_second = input()
flat_number_2 = int(input())


def get_floor_number(flat_number):
    floor_number = ((flat_number - 1) // flats) % floors + 1
    return floor_number


floor_number_1 = get_floor_number(flat_number_1)
floor_number_2 = get_floor_number(flat_number_2)
if floor_number_1 > floor_number_2:
    print(name_first)
elif floor_number_1 < floor_number_2:
    print(name_second)
else:
    print("Same")
